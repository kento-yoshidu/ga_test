import React from "react"
import Link from "next/link"
import type { GetServerSideProps } from "next"

const ReadSingleItem = ({ singleItem }: { singleItem: Item }) => (
  <>
    <p>{singleItem.title}</p>
    <p>{singleItem.description}</p>

    <div>
      <Link href={`/item/update/${singleItem._id}`}>アイテム編集</Link>

      <Link href={`/item/delete/${singleItem._id}`}>アイテム削除</Link>
    </div>
  </>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(`${process.env.URL}/api/item/${context.query.id}`)

  const singleItem = await response.json()

  return {
    props: singleItem
  }
}

export default ReadSingleItem
