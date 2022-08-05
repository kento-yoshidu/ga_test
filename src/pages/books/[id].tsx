import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import prisma from "../../../lib/prisma"

interface Book {
  id: number
  title: string
  description: string
  price: number
  progress: number
}

const Book = ({ book }: { book: Book }) => (
  <>
    <h1>{book.title}</h1>

    <p>{book.description}</p>

    <p>{book.price}</p>

    <p>{book.progress}</p>
  </>
)

export default Book

export const getServerSideProps: GetServerSideProps = async ({
  req, params, res
}) => {
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 401
    return { props: { book: null } }
  }

  const data = await prisma.book.findUnique({
    where: {
      id: Number(params?.id)
    }
  })

  const book = JSON.parse(JSON.stringify(data))

  return {
    props: { book }
  }
}
