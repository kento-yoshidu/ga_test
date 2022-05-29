import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const getSingleItem: NextApiHandler = async (req, res) => {
  try {
    await connectDB()

    const singleItem = await ItemModel.findById(req.query.id)

    return res.status(200).send({
      message: "アイテム読み取り成功",
      singleItem: singleItem
    })
  } catch (err) {
    return res.status(400).send({ message: "アイテム読み取り失敗" })
  }
}

export default getSingleItem
