import React, { useState, useEffect} from "react"
import Image from "next/image"

const ApiFetch = () => {
  const [title, setTitle] = useState<string>("")

  useEffect(() => {
    (async () => {
      const data = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:978-4-87311-982-3")
      const json = await data.json()

      console.log(json.items[0].volumeInfo.imageLinks.thumbnail)

      setTitle(json.items[0].volumeInfo.imageLinks.thumbnail)
    })()
  }, [])

  return (
    <div>
      <Image
        src="http://books.google.com/books/content?id=msLmzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        width="300"
        height="400"
        alt="hoge"
      />

      <p>{title}</p>
    </div>
  )
}

export default ApiFetch
