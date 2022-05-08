import jwt from "jsonwebtoken"

import connextDB from "../../../utils/mongo"
import { UserModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const secret_key = "nextmarket"

const loginUser: NextApiHandler = async (req, res) => {
  try {
    await connextDB()

    const user = await UserModel.findOne({
      email: req.body.email
    })

    if (user) {
      if (req.body.password === user.password) {
        const payload = {
          email: req.body.email
        }

        const token = jwt.sign(payload, secret_key, { expiresIn: "23h" })

        return res.status(200).json({
          message: "ログイン成功",
          token: token
        })
      } else {
        return res.status(400).json({ message: "パスワードが間違っています。"})
      }
    } else {
      return res.status(400).json({ message: "ユーザーが存在していません。"})
    }

  } catch (err) {
    res.status(400).json({ messsage: "ログイン失敗"})
  }
}

export default loginUser
