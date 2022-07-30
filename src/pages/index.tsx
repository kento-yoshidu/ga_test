const Home = ({ allItems }: { allItems: Item[] }) => {
  return (
    <div>Hello World</div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.URL}/api/item/readAll`)
  const allItems = await response.json()

  return {
    props: allItems
  }
}

export default Home
