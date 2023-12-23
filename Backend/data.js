const mongoose = require("mongoose");
require("dotenv").config();
const DataSchemaJson = require("./Model/model");
const data_json = require("./jsondata.json")

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await DataSchemaJson.create(data_json)
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  };
  
  connectDB();
