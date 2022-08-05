import React from "react"
import useAuth from "../../../../utils/useAuth"

import type { GetServerSideProps } from "next"

const DeleteItem = ({ singleItem }: { singleItem: Item }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await fetch(`${process.env.URL}/api/item/delete/${singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
    } catch (err) {
      alert(err)
    }
  }

  const loginUser = useAuth()

  if (loginUser) {
    return (
      <>
        <form onSubmit={handleSubmit}>
          <h1>Item削除</h1>

          <h2>{singleItem.title}</h2>

          <p>{singleItem.description}</p>

          <button>削除</button>
        </form>
      </>
    )
  } else {
    return (
      <h1>権限がありません</h1>
    )
  }
}

export default DeleteItem

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/item/${context.query.id}`)

  const singleItem = await response.json()

  return {
    props: singleItem
  }
}
