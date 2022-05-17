import jwt from "jsonwebtoken"

import type { NextApiRequest, NextApiResponse } from "next"

const auth = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      return handler(req, res)
    }

    // const token = await req.headers.authorization?.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnRvX3lvc2hpZHVAeWFob28uY28uanAiLCJpYXQiOjE2NTI3ODM3OTYsImV4cCI6MTY1Mjk1NjU5Nn0.JNUQ3ECxbXpMQsF7ZDGrwN4WfkhZ0iYBpKhdwYF0rmg"

    if (!token) {
      return res.status(401).json({
        message: "トークンがありません"
      })
    }

    try {
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)

      console.log(decoded)

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
