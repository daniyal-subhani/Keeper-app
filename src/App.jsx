import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { v4 as uuidv4 } from "uuid";
import { Fab, Zoom } from "@mui/material";

function App() {
  const [input, setinput] = useState({ title: "", content: "" });
  const [notes, setnotes] = useState([]);
  const [isTrue, setIsTrue] = useState(false);

  const inputValue = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log({ [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if ((input.title.trim() !== "", input.content.trim() !== "")) {
      const noteId = { ...input, id: uuidv4() };
      setnotes([...notes, noteId]);
      setinput({ title: "", content: "" });
    }
  };

  const handleDelete = (id) => {
    setnotes(notes.filter((note) => note.id !== id));
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    if (noteToEdit) {
      setinput({ title: noteToEdit.title, content: noteToEdit.content });
      setnotes(notes.filter((note) => note.id !== id));
    }
  };

  const changeState = () => {
    setIsTrue(true);
  };

  return (
    <>
      <Navbar />
      <div className=" flex justify-center">
        <form
          onSubmit={handleAdd}
          className="add-notes  flex-col p-4 mx-auto rounded-lg w-[500px] bg-white my-7"
        >
          {isTrue && (
            <input
              value={input.title}
              onChange={inputValue}
              className=" w-full outline-none p-1 text-xl "
              type="text"
              placeholder="Title"
              name="title"
            />
          )}
          <textarea
            onClick={changeState}
            value={input.content}
            onChange={inputValue}
            className="w-full outline-none resize-none text-xl p-1 "
            name="content"
            id=""
            rows={isTrue ? 3 : 1}
            placeholder="Take a note..."
          ></textarea>
          <Zoom in={isTrue} className="relative">
            <Fab
              type="submit"
              className="add bg-yellow-400 text-white rounded-[50%]   w-[36px] h-[36px]   top-[-18px] right-[18px] transition-all hover:bg-slate-100"
            >
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
      {notes.length === 0 && (
        <div className="note w-[20%] m-7 p-4 bg-white  rounded-lg float-left">
          No Note to Display
        </div>
      )}
      {notes.map((keep) => (
        <div key={keep.id} className="notes">
          <div className="note w-[20%] m-7 p-4 bg-white rounded-lg float-left">
            <h1 className="mb-1 font-bold text-xl">{keep.title}</h1>
            <p className="mb-2">{keep.content}</p>
            <button
              onClick={() => handleDelete(keep.id)}
              className="bg-gray-200 text-black mx-2 p-1 rounded-sm float-right relative border-none outline-none hover:bg-slate-300 transition-all"
            >
              <DeleteIcon />
            </button>
            <button
              onClick={() => handleEdit(keep.id)}
              className="bg-gray-200 text-black mx-2 p-1 rounded-sm float-right relative border-none outline-none  hover:bg-slate-300 transition-all"
            >
              <EditNoteIcon />
            </button>
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default App;
