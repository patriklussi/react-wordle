import React,{useContext} from 'react'
import "../App.css";
import { WordleContext } from "../components/Game";
export default function Error() {
  const {error} = useContext(WordleContext)
  return (
   <article className='error-card'>
        <p>{error}</p>
   </article>
  )
}
