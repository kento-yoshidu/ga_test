import Link from "next/link"

const Home = ({ allItems }: { allItems: Item[] }) => {
  console.log(allItems)
  return (
    <>
      <div>Hello World</div>

      <Link href="/item/create">アイテムを作成する</Link>
    </>

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
