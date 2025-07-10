import Note from '../models/Note.js';


export const getNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Sort by creation date, newest first
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notes" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const createNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "Error creating note" });
  }
}

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title && !content) {
    return res.status(400).json({ message: "Title or content are required" });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: "Error updating note" });
  }
}

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting note" });
  }
}