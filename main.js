import express from "express";
import connectionDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";

//basic express setup for testing 
// const app = express();

// app.use(express.json());

// app.get("/", (req,res) => {
//   res.send("Note API is running ");
// });

//main route setup 

const app = express();
const PORT = 5000;

//express middleware
app.use(express.json());

//routes
app.use("/api/notes", noteRoutes);

connectionDB(); //calling the mongo connection

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
});