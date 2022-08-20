import { NextApiRequest, NextApiResponse} from "next"
import prisma from "../../../../lib/prisma"
import { getSession } from "next-auth/react"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  const { flag } = JSON.parse(req.body)

  if (session?.user?.email) {
    const result = await prisma.book.update({
      where: {
        id: Number(req.query.id)
      },
      data: {
        flag: !flag
      }
    })

    res.json(result)
  } else {
    res.status(401).send({ message: "Unauthenticated" })
  }
}
