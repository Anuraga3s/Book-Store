import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./Route/book.route.js"
import userRoute from "./Route/user.route.js"
const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const PORT =process.env.PORT || 4001
const URI= process.env.MongoDBURI
//connect to mongoDB

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ Error connecting to MongoDB:", err));

//defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on Port : ${PORT}`)
});