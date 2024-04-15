import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Navbar() {
  return (
    <nav className="bg-yellow-500 px-4 py-4 flex">
      <h1 className="font-bold text-white text-3xl flex items-baseline mx-2"> <HighlightIcon /> Keeper </h1>
    </nav>
  );
}

export default Navbar;
