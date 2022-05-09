import connectDB from "../../../utils/database"

import type { NextApiHandler } from "next"

const createItem: NextApiHandler = async (req, res) => {
  await connectDB()
  res.status(200).json({ message: "アイテム作成" })
}

export default createItem
