import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import EditNoteIcon from '@mui/icons-material/EditNote';

function App() {
  return (
    <>
      <Navbar />
      <div className=" flex justify-center">
        <form className="add-notes flex-col p-4 mx-auto rounded-lg w-[480px] bg-white my-7">
          <input
            className=" w-full outline-none p-1 text-xl "
            type="text"
            placeholder="Title"
          />
          <textarea
            className="w-full outline-none resize-none text-xl p-1 "
            name=""
            id=""
            rows="3"
            placeholder="Take a note..."
          ></textarea>
          <button className="add bg-yellow-400 text-white rounded-[50%]  w-[36px] h-[36px] absolute top-[248px] right-[420px]">
            <AddIcon />
          </button>
        </form>
      </div>
      <div className="note w-[20%] m-5 p-4 bg-white rounded-lg float-left">
        <h1 className="mb-1">Title</h1>
        <p className="mb-2">Your note</p>
        <button className="bg-gray-200 text-yellow-500 mx-2 p-1 rounded-sm float-right relative border-none outline-none">
          <DeleteIcon />
        </button>
        <button className="bg-gray-200 text-yellow-500 mx-2 p-1 rounded-sm float-right relative border-none outline-none">
          <EditNoteIcon />
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
