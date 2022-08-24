import prisma from "../../../../lib/prisma";
import { getSession } from "next-auth/react";
import { resourceUsage } from "process";

export default async function (req, res) {
  const session = await getSession({ req })

  if (session?.user?.email) {
    const result = await prisma.book.aggregate({
      _sum: {
        price: true
      }
    })
    res.json(result)
  } else {
    res.status(401).send({ message: "Unauthenticated" })
  }
}
