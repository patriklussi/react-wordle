import React from 'react'
import "../App.css";
export default function Error({errorMsg}) {
  return (
   <article className='errorCard'>
        <p>{errorMsg}</p>
   </article>
  )
}
