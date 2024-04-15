import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Navbar() {
  return (
    <nav className="bg-yellow-500 px-4 py-5 flex">
      <h1 className="font-bold text-white text-3xl flex items-baseline"> <HighlightIcon /> Keeper </h1>
    </nav>
  );
}

export default Navbar;
