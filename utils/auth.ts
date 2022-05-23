import jwt from "jsonwebtoken"

import type { NextApiRequest, NextApiResponse } from "next"

const auth = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      return handler(req, res)
    }

    const token = await req.headers.authorization?.split(" ")[1]

    if (!token) {
      return res.status(401).json({
        message: "トークンがありません"
      })
    }

    try {
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)

      req.body.email = decoded.email

      return handler(req, res)
    } catch (err) {
      return res.status(401).json({
        message: "トークンが正しくありません。"
      })
    }
  }
}

export default auth
