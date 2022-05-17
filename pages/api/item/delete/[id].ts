import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"
import auth from "../../../../utils/auth"

import type { NextApiHandler } from "next"

const deleteItem: NextApiHandler = async (req, res) => {
  try {
    await connectDB()

    const item = await ItemModel.findById(req.query.id)

    if (!item) {
      res.status(400).json({
        message: "アイテムが存在しません"
      })
    }

    if (item.email === req.body.email) {
      await ItemModel.deleteOne({
        _id: req.query.id
      })
      return res.status(200).send({
        message: "アイテム削除成功"
      })
    } else {
      return res.status(401).json({
        message: "アイテム削除の権限なし"
      })
    }
  } catch (err) {
    return res.status(400).send({
      message: "アイテム削除失敗"
    })
  }
}

export default auth(deleteItem)
