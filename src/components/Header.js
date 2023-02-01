import React, { useState } from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "react-responsive";
import { IconButton } from "@mui/material";
export default function Header() {
  const isTabletOrPhone = useMediaQuery({ query: "(min-width:650px)" });
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <header>
      {isTabletOrPhone ? (
        <div className="normal-content">
          <h1>Wordle</h1>
          <h2>How to play</h2>
        </div>
      ) : (
        <div className="menu-content">
          <MenuIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          
        </div>
      )}
    </header>
  );
}
