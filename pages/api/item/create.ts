import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const createItem: NextApiHandler = async (req, res) => {
  try {
    await connectDB()

    await ItemModel.create(req.body)

    return res.status(200).json({ message: "アイテム作成成功" })
  } catch (err) {
    res.status(400) .json({ message: "アイテム作成失敗" })
  }
}

export default createItem
