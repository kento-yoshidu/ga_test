import React, { useState, useEffect } from "react"
import useAuth from "../../../utils/useAuth"

const CreateItem = () => {
  const [title, setTitle] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [description, setDescription] = useState<string>("")


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`${process.env.URL}/api/item/create`, {
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
        <h1>Item登録</h1>
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
  }
}

export default CreateItem
