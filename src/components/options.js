import React from 'react'

export default function options(props) {
 
    return (
    <p 
    className={props.data.selected === props.option ? 'selected' : ''}
    onClick={() => props.getQuestionIdAndOption({
      questionId:props.questionId,
      selectedOption:props.option

    })}>{props.option}</p>
  )
}
