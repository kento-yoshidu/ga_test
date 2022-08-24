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

const Books = ({ books, price }: { books: Books[], price: number }) => {
  return (
    <>
      <h1>{price}</h1>
      {books.map((book) => (
        <div
          key={`${book.id}`}
          onClick={() => Router.push(`/books/${book.id}`)}
        >
          <h2>{book.title}</h2>
          <p>{book.description}</p>
          <p>{book.price}円</p>
          <p>{book.progress}</p>
        </div>
      ))}
    </>
  )
}

export default Books

export const getStaticProps: GetStaticProps = async () => {
  const books = await prisma.book.findMany()

  const { _sum } = await prisma.book.aggregate({
    _sum: {
      price: true
    }
  })

  const price = _sum.price

  return {
    props: { books, price }
  }
}
