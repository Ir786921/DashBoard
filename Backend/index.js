const express = require("express");
const mongoose = require("mongoose")
const Cors = require("cors");
require("dotenv").config();
const Routes = require("./Router/router")

const app = express();
app.use("/api",Routes)
app.use(express.json());
app.use(Cors({
    origin:"http://localhost:1234"
}));

const Port = process.env.PORT|| 8000; 
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
  
connectDB();

app.listen(Port ,()=>{
    console.log("Server is started");
});
