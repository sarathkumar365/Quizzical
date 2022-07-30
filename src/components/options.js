import React from 'react'

export default function options(props) {
  let style;
  
  if(props.data.selected === props.option){
    style = {
      backgroundColor: '#D6DBF5',
      border: '0px solid transparent'
    }
  }

return (
    <p
    style={style}
    onClick={() => props.getQuestionIdAndOption({
      questionId:props.questionId,
      selectedOption:props.option 

    })}>{props.option}</p>
  )


 
  //   return (
  //   <p
  //   className={props.data.selected === props.option ? 'selected' : ''}
  //   onClick={() => props.getQuestionIdAndOption({
  //     questionId:props.questionId,
  //     selectedOption:props.option

  //   })}>{props.option}</p>
  // )
}
