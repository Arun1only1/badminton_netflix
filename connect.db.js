import mongoose from "mongoose";

const dbName = "badminton-movie";
const dbUser = "arun";
const dbPassword = "arun2nly2";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@school.b6qkdnb.mongodb.net/${dbName}?retryWrites=true&w=majority`
    );

    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
