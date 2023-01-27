import React from 'react'
export default function VictoryMessage({word,show,setShow}) {
  if(!show){
    return
  }

  return (
    <div className='modal'>
      <section className='modal-content'>
      <div className='modal-header'>
        <button className='modal-close-button ' onClick={(()=>{setShow(false)})}></button>
        </div>
        <div className='modal-title'>
        <h2>Congratulations you won!</h2>
        </div>
        <div className='modal-body'>
        <h3>The word was {word}!</h3>
        <button className='replay-button'>Play again</button>
        </div>
       
       
        </section>
    </div>
  )
}
