import connextDB from "../../../utils/mongo"
import { UserModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const loginUser: NextApiHandler = async (req, res) => {
  try {
    await connextDB()

    const user = await UserModel.findOne({
      email: req.body.email
    })

    console.log(user)
    console.log(req.body.password)

    if (user) {
      if (req.body.password === user.password) {
        return res.status(200).json({ message: "ログイン成功"})
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
