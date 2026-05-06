const mongoose = reuire("mongoose");

const localUrl = process.env.MONGO_URI_LOCAL;

const connectDB = async () => {
  try {
    await mongoose.connect(localUrl);
    console.log("MongoDb connected locally");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
