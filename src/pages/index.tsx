import React from "react"
// import useAuth from "../../utils/useAuth"

import { useSession, signIn, signOut } from "next-auth/react"

const Home = ({ allItems }: { allItems: Item[] }) => {
  // useAuth()
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )

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
