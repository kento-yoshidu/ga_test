import connextDB from "../../../utils/mongo"
import { ItemModel } from "../../../utils/schemaModels"

import type { NextApiHandler } from "next"

const getSingleItem: NextApiHandler = async (req, res) => {
  try {
    await connextDB()

    const item = await ItemModel.findById(req.query.id)

    return res.status(200).send({
      message: "読み取り専用",
      item: item
    })
  } catch (err) {
    console.log(err)
  }
}

export default getSingleItem
