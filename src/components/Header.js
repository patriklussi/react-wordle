import React, {  useContext } from "react";
import "../App.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton } from "@mui/material";

//Hooks
import { useWorldeContext } from "../hooks/useWorldeContext";

export default function Header() {
  const { setShowInfoModal, setDisabled } = useWorldeContext();

  const openInfo = () => {
    setShowInfoModal(true);
    setDisabled(true);
  };
  return (
    <header>
 
        <h1>Wordle</h1>
        <IconButton style={{marginRight:"25px"}} className="right" role="button" onClick={openInfo}>
          <HelpOutlineIcon style={{ color: "white" }} fontSize="large" />
        </IconButton>
 
    </header>
  );
}
