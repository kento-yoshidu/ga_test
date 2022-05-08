import mongoose from "mongoose"

const connextDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017")
    console.log("Success")
  } catch(err) {
    console.log("Error", err)
  }
}

export default connextDB
