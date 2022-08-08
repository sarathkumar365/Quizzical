import React from 'react'

export default function Footer(props) { 

  return (
    <div onClick={props.finished ? props.resetGame : props.checkAnwers} className="footer-container">
        <p>{props.finished ? "Play Again" : "Check Answers"}</p>
    </div>
  )
}
