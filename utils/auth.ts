import jwt from "jsonwebtoken"

const secret_key = "nextmarket"

import type { NextApiRequest, NextApiResponse } from 'next'

const auth = (handler: any) => {
  return async(req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
        return handler(req, res)
    }

    // const token = await req.headers.authorization.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtlbnRvX3lvc2hpZHVAeWFob28uY28uanAiLCJpYXQiOjE2NTE5ODcwNzYsImV4cCI6MTY1MjA2OTg3Nn0.DRec3LA_7gft9b2ZKh5pJd3kPyr-hAe0MxMMBbghbuc"
    
    if(!token){
        return res.status(401).json({message: "トークンがありません"})
    }

    try{
        const decoded = jwt.verify(token, secret_key)
        req.body.email = decoded.email 
        return handler(req, res)
    }catch(err){
        return res.status(401).json({message: "トークンが正しくないので、ログインしてください"})
    } 
  }
}

export default auth
