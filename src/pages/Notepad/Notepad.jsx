import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, addNote, editNote } from "../../store-reduxToolkit/reducers/notesSlice";

const Notepad = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState(null); // Track which note is being edited

  const handleAddNote = () => {
    if (title && content) {
      if (editingId) {
        dispatch(editNote({ id: editingId, title, content }));
        setEditingId(null); // Reset edit mode
      } else {
        dispatch(addNote({ id: Date.now(), title, content }));
      }
      setTitle("");
      setContent("");
    }
  };

  const handleDeleteNote = (id) => {
    dispatch(deleteNote(id));
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">📝 Simple Notepad</h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        className="border p-2 w-full mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className={`px-4 py-2 rounded text-white ${editingId ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
        onClick={handleAddNote}
      >
        {editingId ? "Save" : "Add Note"}
      </button>

      <div className="mt-4">
        {notes?.map((note) => (
          <div key={note.id} className="p-2 border rounded bg-white mb-2">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
            <button
              className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
              onClick={() => handleEditNote(note)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteNote(note.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notepad;
