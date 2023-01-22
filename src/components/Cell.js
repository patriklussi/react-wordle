import React, { useEffect, useState } from "react";
import "../App.css";
export default function Cell({ value, status }) {
  const [nameOfClass, setNameOfClass] = useState("");
  const [notFound,setNotFound] = useState("");
  useEffect(() => {
    async function test(){
      if (status.includes(value)) {
        setNameOfClass("greenbackground");
      } else {
       return;
      }
    }
    test();
  }, [status]);
  // Check for colors should be done with a useffect otherwise shit just dont work
  return (
    <article className={`cell ${value !== "" ? "bounce" : ""} ${nameOfClass} `}>
      {" "}
      {value}{" "}
    </article>
  );
}
