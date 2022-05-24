import React from "react"
import Link from "next/link"

import ApiFetch from "../lib/apiFetch"

const Home = ({ allItems }: { allItems: Item[] }) => {
  return (
    <>
      {allItems.map((item) => (
        <Link
          href={`/item/${item._id}`}
          key={item.id}
        >
          <a>
            {/*
            <Image
              width="450px"
              height="200px"
              src={`/${item.image}`}
              alt="item-image"
            />
            */}
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        </Link>
      ))}

      <ApiFetch />

      <section>
        <Link href="/user">ユーザー登録画面へ</Link>
      </section>

      <section>
        <h1>Item編集</h1>
        <form action="http://localhost:3000/api/item/update/627903dd5b3f351b4e0c3cf0" method="POST">
          タイトル : <input type="text" name="title" /> <br />
          画像 : <input type="text" name="image" /> <br />
          価格 : <input type="text" name="price" /> <br />
          説明 : <input type="text" name="description" /> <br />
          <button type="submit">登録</button>
        </form>
      </section>

      <section>
        <h1>Item削除</h1>
        <form action="http://localhost:3000/api/item/delete/627903dd5b3f351b4e0c3cf0" method="POST">
          <button type="submit">削除</button>
        </form>
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/item/readAll")
  const allItems = await response.json()

  return {
    props: allItems
  }
}

export default Home
