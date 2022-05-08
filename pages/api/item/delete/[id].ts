import connextDB from "../../../../utils/mongo"
import { ItemModel } from "../../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const deleteItem: NextApiHandler = async (req, res) => {
  try {
    await connextDB()

    await ItemModel.deleteOne({
      _id: req.query.id
    })

    return res.status(200).send({
      message: "削除成功"
    })
  } catch (err) {
    res.status(400).json({
      message: "削除失敗"
    })
  }
}

export default deleteItem
