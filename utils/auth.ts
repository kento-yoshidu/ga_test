import jwt from "jsonwebtoken"

import type { NextApiRequest, NextApiResponse } from "next"

const auth = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      return handler(req, res)
    }

    // const token = await req.headers.authorization?.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnRvX3lvc2hpZHVAeWFob28uY28uanAiLCJpYXQiOjE2NTI0NDM0NjYsImV4cCI6MTY1MjYxNjI2Nn0.qi8_GFwvMjMH_CGAPxxEhPErunA89Z2wvV9xs2wlhd4"

    if (!token) {
      return res.status(401).json({
        message: "トークンがありません"
      })
    }

    try {
      const decoded = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`)

      console.log("decded is", decoded)
    } catch (err) {
      return res.status(401).json({
        message: "トークンが正しくありません。"
      })
    }
  }
}

export default auth
