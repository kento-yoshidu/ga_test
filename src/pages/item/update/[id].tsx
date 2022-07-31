import React, { useState } from "react"
import useAuth from "../../../../utils/useAuth"

import type { GetServerSideProps } from "next"

const UpdateItem = ({ singleItem }: { singleItem: Item }) => {
  const [title, setTitle] = useState<string>(singleItem.title)
  const [price, setPrice] = useState<string | number>(singleItem.price)
  const [description, setDescription] = useState<string>(singleItem.description)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`${process.env.URL}/api/item/update/${singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          title: title,
          price: price,
          description: description
        })
      })

      const jsonData = await response.json()

      alert(jsonData.message)
    } catch (err) {
      alert(err)
    }
  }

  const loginUser = useAuth()

  if (loginUser) {
    return (
      <>
        <h1>Item編集</h1>
        <form onSubmit={handleSubmit}>
          タイトル :
          <input
            value={title}
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          /> <br />

          <input
            value={price}
            type="text"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          /> <br />

          <input
            value={description}
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          /> <br />
          <button>登録</button>
        </form>
      </>
    )
  } else {
    return (
      <h1>権限がありません</h1>
    )
  }
}

export default UpdateItem

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/item/${context.query.id}`)

  const singleItem = await response.json()

  return {
    props: singleItem
  }
}
