import React from 'react'

export default function Footer(props) { 

  return (
    <div onClick={props.finished ? props.resetGame : props.checkAnwers} className="footer-container">
        {props.correctAns > 0 ? 
        <p className='score'>You scored {props.correctAns} / 10 correct answers</p>
        : ""}
        
        <p>{props.finished ? "Play Again" : "Check Answers"}</p>
    </div>
  )
}
