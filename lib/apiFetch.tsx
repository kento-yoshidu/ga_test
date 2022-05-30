import React, { useState, useEffect } from "react"
import Image from "next/image"

export async function getSata() {
  const data = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:978-4-87311-681-5")

  const json = await data.json()

  return <Image src="/hollo.jpg" height={200} width={200} />
}

const ApiFetch = () => {
  return (
    <div>
      <h1>hoge</h1>
    </div>
  )
}

export default ApiFetch

// https://zenn.dev/nana/articles/ff65486fcd0e34
