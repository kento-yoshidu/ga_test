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
  }
}

export default auth
