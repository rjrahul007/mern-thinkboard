import mongoose from "mongoose";

// 1st step: Define the schema for the Note model
// 2nd step: Create the model using the schema

const noteSchema = new mongoose.Schema(
    {
  title: {
    type: String,
    required: true,
  },
    content: {
        type: String,
        required: true,
    },
},
    {timestamps: true}, // Automatically add createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);

export default Note;