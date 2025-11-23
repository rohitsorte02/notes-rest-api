import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/notesdb",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected succesfully");
    
  } catch (error) {
    console.log("MonogoDB connection error::",error.message);
    process.exit(1);
  
  }
};

export default connectionDB;