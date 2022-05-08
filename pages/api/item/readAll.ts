import type { NextApiHandler } from "next"

import connextDB from "../../../utils/mongo"
import { ItemModel } from "../../../utils/schemaModels"

const getAllItems: NextApiHandler = async (req, res) => {
  try {
    await connextDB()
    const allItems = await ItemModel.find()

    return res.status(200).send({
      message: "全てのアイテム読み取り成功",
      allItems: allItems
    })
  } catch (err) {
    console.log(err)
  }
}

export default getAllItems
