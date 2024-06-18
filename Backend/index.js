import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;

const MongoDBATLASURI = process.env.MongoDBATLASURI;

// Database connection using MongoAtals online database using mongodb string
try {
  mongoose.connect(MongoDBATLASURI);
  console.log("connected to database");
} catch (error) {
  console.log("Error", error);
}

//Defining Route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
