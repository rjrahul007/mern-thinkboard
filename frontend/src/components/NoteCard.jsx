import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utilis.js";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = (note, setNotes) => {

  const handleDelete = async (e, id) => {
    e.preventDefault(); //get rid of navigation behaviour
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      setNotes(prev=> prev.filter((note)=> note._id !== id))
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  const { _id, title, content, createdAt } = note;
  return (
    <Link
      to={`/note/${_id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00FF9D]"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{title}</h3>
        <p className="text-base-content/70 line-clamp-3">{content}</p>
        <div className="card-actions justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(createdAt)}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-5" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
