import mongoose from "mongoose";
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log(`Connect Database Succsesfully`);
  } catch (error) {
    console.log(`Cannot connect to Mongoose`);
  }
};
export default ConnectDB;
