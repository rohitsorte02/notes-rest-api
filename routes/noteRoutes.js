import { Router } from "express";
import express from "express";
import { createNote, getNoteById, getNotes, updateNoteById, deleteNoteById } from "../controllers/noteController.js";

const router = express.Router();


//used for testing the working 
// router.get("/", (req, res) => {
//   res.send("Notes api working properly");
// });

//adding the actual routes
router.post("/",createNote);
router.get("/",getNotes);
router.get("/:id",getNoteById);
router.put("/:id",updateNoteById);
router.delete("/:id",deleteNoteById);


export default router;