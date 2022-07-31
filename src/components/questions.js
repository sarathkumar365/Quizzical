import React from 'react'
import Options from "./options"

const questions = (props)=> {

  // console.log(props);

  const optionsElementsArray = props.data.options.map((el,i) => <Options 
            key={i} 
            option={el}
            questionId={props.data.id}   
            getQuestionIdAndOption={(props.data.isCorrect === null) ? props.getQuestionIdAndOption : props.answersChecked}   
            data={props.data}  
                 
            />)

  return (
    <div className="qusetion-container">
        <h2>{props.data.question}</h2>
        <div className="options-container">
            {optionsElementsArray}
        </div>
        <hr className="line"></hr> 
    </div>
  )
  
}


export default questions