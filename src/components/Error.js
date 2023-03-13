import React,{useContext} from 'react'
import "../App.css";


//Hooks
import { useWorldeContext } from "../hooks/useWorldeContext";
export default function Error() {
  const {error} = useWorldeContext();
  return (
   <article className='error-card'>
        <p>{error}</p>
   </article>
  )
}
