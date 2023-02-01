import React,{useContext} from 'react'
import "../App.css";
import { WordleContext } from '../App';
export default function Error() {
  const {error} = useContext(WordleContext)
  return (
   <article className='error-card'>
        <p>{error}</p>
   </article>
  )
}
