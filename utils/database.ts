import mongoose from "mongoose"

const connectDB = () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}`)
    console.log("DBアクセス成功")
  } catch (err) {
    console.log("DBアクセス失敗")
  }
}

export default connectDB
