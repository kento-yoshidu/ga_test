import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"
import auth from "../../../../utils/auth"

import type { NextApiHandler } from "next"

const updateItem: NextApiHandler = async (req, res) => {
  try {
    await connectDB()

    console.log(req.query.id)
    const item = await ItemModel.findById(req.query.id)

    console.log("item is ", item)

    if (item.email === req.body.email) {
      await ItemModel.updateOne({
        _id: req.query.id
      }, req.body)

      return res.status(200).send({ message: "アイテム編集成功" })
    } else {
      return res.status(401).send({ message: "アイテム編集の権限なし" })
    }
  } catch (err) {
    return res.status(400).send({ message: "アイテム編集失敗" })
  }
}

export default auth(updateItem)
