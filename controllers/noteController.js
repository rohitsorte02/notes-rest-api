import Note from "../models/noteModel.js";

//create new note
export const createNote = async (req, res) => {
  // try catch block for error handling
  try {
    const { title, content } = req.body;

    //data validation
    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "title and content required",
      });
    }

    const note = await Note.create({ title, content });

    return res.status(201).json({
      success: true,
      data: note,
    });
  } catch (error) {
    console.log("error=====>", error)
    return res.status(500).json({
      success: false,
      message: "server error",
      error: error.message,
    });
  }
};

//get a single note by id
export const getNoteById = async (req, res) => {
  // try catch block for error handling
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note Not Found",
      });
    }

    return res.json({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "invalid Id",
    });
  }
};
//get all notes
export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.json({
      success: true,
      data: notes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

//update note by id
export const updateNoteById = async (req, res) => {
  try {
    const { title, content } = req.body;
    console.log("data ========>", title, content);

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "note not found",
      });
    }

    return res.json({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "invalid id",
    });
  }
};

//delete by id
export const deleteNoteById = async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "note not found",
      });
    }

    return res.json({
      success: true,
      message: "note deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "invalid id",
    });
  }
};

