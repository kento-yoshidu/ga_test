import connextDB from "../../../utils/mongo"
import { UserModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const registerUser: NextApiHandler = async (req, res) => {
  try {
    await connextDB()

    await UserModel.create(req.body)

    return res.status(200).json({
      message: "ユーザー登録成功"
    })
  } catch (err) {
    console.log(err)
  }
}

export default registerUser
