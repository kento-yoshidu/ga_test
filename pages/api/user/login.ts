import jwt from "jsonwebtoken"

import connectDB from "../../../utils/database"
import { UserModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const loginUser: NextApiHandler = async (req, res) => {
  try {
    await connectDB()

    const loginUser = await UserModel.findOne({
      email: req.body.email
    })

    if (loginUser) {
      if (req.body.password === loginUser.password) {
        const payload = {
          email: req.body.email
        }

        const token = jwt.sign(payload, `${process.env.JWT_SECRET_KEY}`, { expiresIn: "2d" })

        console.log(token)

        return res.status(200).json({
          message: "ログイン成功",
          user: loginUser,
          token: token
        })
      } else {
        return res.status(400).json({
          message: "パスワードが違います"
        })
      }
    } else {
      return res.status(400).json({
        message: "ユーザーが存在していません"
      })
    }
  } catch (err) {
    return res.status(400).json({
      message: "ログイン失敗"
    })
  }
}

export default loginUser
