import connextDB from "../../../../utils/mongo"
import { ItemModel } from "../../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const updateItem: NextApiHandler = async (req, res) => {
  try {
    await connextDB()

    await ItemModel.updateOne({
      _id: req.query.id
    }, req.body)

    return res.status(200).send({ message: "アイテム編集"})
  } catch (err) {
    console.log(err)
  }
}

export default updateItem
