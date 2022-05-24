import React from "react"
import type { GetServerSideProps } from "next"

const DeleteItem = ({ singleItem }: { singleItem: Item }) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://next-js-app-psi.vercel.app/api/item/delete/${singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })

      const jsonData = await response.json()

      alert(jsonData.message)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Item削除</h1>

        <h2>{singleItem.title}</h2>

        <h3>{singleItem.price}</h3>

        <p>{singleItem.description}</p>

        <button>削除</button>
      </form>
    </>
  )
}

export default DeleteItem

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`https://next-js-app-psi.vercel.app/api/item/${context.query.id}`)

  const singleItem = await response.json()

  return {
    props: singleItem
  }
}

