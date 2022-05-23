import React from "react"
import type { GetServerSideProps } from "next"

const ReadSingleItem = ({ singleItem }: { singleItem: Item }) => (
  <>
    <p>{singleItem.title}</p>
    <p>{singleItem.price}</p>
    <p>{singleItem.description}</p>
  </>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/item/${context.query.id}`)

  const singleItem = await response.json()

  return {
    props: singleItem
  }
}

export default ReadSingleItem
