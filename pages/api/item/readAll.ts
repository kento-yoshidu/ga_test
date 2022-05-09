import connectDB from "../../../utils/database"
import { ItemModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const getAllItems: NextApiHandler = async (req, res) => {
  try {
    await connectDB()

    const items = await ItemModel.find()

    return res.status(200).send({
      message: "全アイテム読み取り成功",
      items: items
    })
  } catch (err) {
    return res.status(400).send({ message: "全アイテム読み取り失敗" })
  }
}

export default getAllItems
