import React, { useEffect, useState } from "react";
import "../App.css";


export default function Cell({ value, status, index }) {
  const [foundClass, setfoundClass] = useState("");
  const [containsClass, setContainsClass] = useState("");
  const [notFoundClass, setNotFoundClass] = useState("");
  const [flip,setFlip] = useState("");
  useEffect(() => {
    if(value === ""){return}
    function color() {
      if (status.foundOnCorrectIndex?.includes(index)) {
        setfoundClass("greenbackground");
      } else if (status.foundOnWrongIndex?.includes(index)) {
        setContainsClass("yellowbackground");
      } else if (status.notFound?.includes(index)) {
        setNotFoundClass("blackness");
      }
    }
    color();
      setTimeout(()=>{
        setFlip("flip");
      },60 * index);
  }, [status]);
  // Check for colors should be done with a useffect otherwise shit just dont work
  return (
    <article
      className={`cell ${
        value !== "" ? "bounce" : ""
      } ${foundClass}  ${containsClass} ${notFoundClass} ${flip} `}
    >

      {value}
    </article>
  );
}
