import type { NextApiHandler } from "next"
import NextAuth from "next-auth/next"
import GithubProvider from "next-auth/providers/github"

const options = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler
