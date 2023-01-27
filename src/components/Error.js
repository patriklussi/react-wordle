import React from 'react'
import "../App.css";
export default function Error({errorMsg}) {
  return (
   <article className='error-card'>
        <p>{errorMsg}</p>
   </article>
  )
}
