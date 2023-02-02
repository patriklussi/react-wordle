import React, { useState ,useContext} from "react";
import "../App.css";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useMediaQuery } from "react-responsive";
import { IconButton } from "@mui/material";
import { WordleContext } from "../App";
export default function Header() {
  const {setShowInfoModal,setDisabled} = useContext(WordleContext);
  const isTabletOrPhone = useMediaQuery({ query: "(min-width:650px)" });
  const [open, setOpen] = useState(false);
 
  const openInfo = () => {
    setShowInfoModal(true);
    setDisabled(true);
  }
  return (
    <header>
      {isTabletOrPhone ? (
        <div className="normal-content">
          <h1>Wordle</h1>
         <IconButton  onClick={openInfo}><HelpOutlineIcon  style={{color:"white"}} fontSize="large" /></IconButton> 
        
      
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
