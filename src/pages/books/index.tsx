import Router from "next/router"
import prisma from "../../../lib/prisma"

import { GetStaticProps } from "next"

interface Books {
  id: number
  title: string
  description: string
  price: number
  progress: number
}

const Books = ({ books }: { books: Books[] }) => (
  <>
    {books.map((book) => (
      <div
        key={`${book.id}`}
        onClick={() => Router.push(`/book/${book.id}`)}
      >
        <h2>{book.title}</h2>
        <p>{book.description}</p>
        <p>{book.price}円</p>
        <p>{book.progress}</p>
      </div>
    ))}
  </>
)

export default Books

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  return {
    props: { books }
  }
}
