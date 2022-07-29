import Test from "./components/test"

const Home = ({ allItems }: { allItems: Item[] }) => {
  return (
    <Test />
  )
  // useAuth()

  /*
  return (
    {/*
    <div>
      <Head>
        <title>積読改善アプリ</title>
      </Head>

      {allItems.map((item) => (
        <Link
          href={`/item/${item._id}`}
          key={item.id}
        >
          <a>
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        </Link>
      ))}

      <Test />

      <section>
        <Link href="/user">ユーザー登録画面へ</Link>
      </section>
    </div>
      */
}

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.URL}/api/item/readAll`)
  const allItems = await response.json()

  return {
    props: allItems
  }
}

export default Home
