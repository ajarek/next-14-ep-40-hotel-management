import HeroImage from "@/components/HeroImage";
import HeroInfo from "@/components/HeroInfo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
     <div className="grid grid-cols-2 gap-4">
      <HeroInfo/>
      <HeroImage/>
     </div>
      </main>
  );
}
