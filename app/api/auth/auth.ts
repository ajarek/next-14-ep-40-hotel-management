import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { User } from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  pages: {
    error: '/register',
  },

  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { type: 'text', required: true },
        password: { type: 'password', required: true },
      },
      async authorize(credentials:{username: string, password: string}) {
        await connectToDb();

        try {
          const user = await User.findOne({ username: credentials.username });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
             
              const redirectUrl: string = '/rooms'

              return {
                user,
                redirectUrl, 
              };
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});