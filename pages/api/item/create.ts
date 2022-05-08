import connextDB from "../../../utils/mongo"
import { ItemModel } from "../../../utils/schemaModels"
import type { NextApiHandler } from "next"
import auth from "../../../utils/auth"

const createItem: NextApiHandler = async (req, res) => {
  try {
    connextDB()
    
    await ItemModel.create(req.body)
    return res.status(200).json({ message: "アイテム作成" })
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" })
  }
}

export default auth(createItem)
