import React from "react"

export async function getServerSideProps() {
  const data = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:978-4-87311-681-5")

  const json = await data.json()

  console.log("json is", json)

  return {
    props: {
      json: json
    }
  }
}

const ApiFetch = (props: any) => {
  console.log(props)
  return (
    <div>
      <h1>test</h1>
    </div>
  )
}

export default ApiFetch

// https://zenn.dev/nana/articles/ff65486fcd0e34
