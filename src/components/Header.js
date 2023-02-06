import React, { useState ,useContext} from "react";
import "../App.css";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton } from "@mui/material";
import { WordleContext } from "../components/Game";
export default function Header() {
  const {setShowInfoModal,setDisabled} = useContext(WordleContext);
  
 
  const openInfo = () => {
    setShowInfoModal(true);
    setDisabled(true);
  }
  return (
    <header>
        <div className="normal-content">
          <h1>Wordle</h1>
         <IconButton role="button"  onClick={openInfo}><HelpOutlineIcon  style={{color:"white"}} fontSize="large" /></IconButton> 
        </div>
    </header>
  );
}
