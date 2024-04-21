const SerachPage = async ({ params }: { params: { searchTerm: string } }) => {
  const { searchTerm } = params
  return(
    <div>{searchTerm}</div>
  )
}
export default SerachPage