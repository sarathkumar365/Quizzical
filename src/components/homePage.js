import React from 'react'

export default function homePage(props) {
// console.log(props);
     
  return (
    <div className='home'>
        <h2>Quizzical</h2>
        <p>A quizz challenge for you</p>
        <button onClick={props.appStatus}>Start Quiz</button>
  </div>
    )
}