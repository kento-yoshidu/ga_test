import connextDB from "../../../utils/mongo"
import { ItemModel } from "../../../utils/schemaModels"
import type { NextApiHandler } from "next"

const createItem: NextApiHandler = async (req, res) => {
  try {
    connextDB()
    
    await ItemModel.create(req.body)
    return res.status(200).json({ message: "アイテム作成" })
  } catch (err) {
    console.log(err)
  }
}

export default createItem
