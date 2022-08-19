import { NextApiRequest, NextApiResponse} from "next"
import prisma from "../../../../lib/prisma"
import { getSession } from "next-auth/react"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (session?.user?.email) {
    const result = await prisma.book.update({
      where: {
        id: Number(req.query.id)
      },
      data: {
        book: {
          connect: { email: session?.user?.email}
        }
      }
    })
  }
}
