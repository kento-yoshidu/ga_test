import Router from "next/router"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import prisma from "../../../lib/prisma"

async function ChangeStatus(id: number, flag: boolean): Promise<void> {
  await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + `/api/change/${id}`,
  {
    method: "PUT",
    body: JSON.stringify({ flag: flag })
  })
  Router.push(`/books/${id}`)
}

interface Book {
  id: number
  title: string
  description: string
  price: number
  progress: number
  flag: boolean
}

const Book = ({ book }: { book: Book }) => (
  <>
    <h1>{book.title}</h1>

    <p>{book.description}</p>

    <p>{book.price}</p>

    <p>{book.progress}</p>

    <p>{String(book.flag)}</p>

    <button
      onClick={() => ChangeStatus(book.id, book.flag)}
      type='button'
      className='mt-5 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
    >
      Bookmark this article
    </button>
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
