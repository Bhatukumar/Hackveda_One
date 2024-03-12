const mongoose = require("mongoose");
const Doctor = require("./doctorModel");
require('dotenv').config();


const URL =process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    const temp = await mongoose.connect(URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      bufferCommands: false, // Disable command buffering
    //   bufferMaxEntries: 0, // Disable command buffering
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    return temp;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
