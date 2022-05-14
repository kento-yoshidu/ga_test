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
        return res.status(200).json({
          message: "ログイン成功",
          user: loginUser
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
