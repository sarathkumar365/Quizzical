import React from 'react'

export default function options(props) {
  let style;
  
  if(props.data.isCorrect === null){
    if(props.data.selected === props.option){
      style = {
        backgroundColor: '#D6DBF5',
        border: '0px solid transparent'
      }
    }
  } else if(props.data.isCorrect === true){
    if(props.data.selected === props.option){
      style = {
        backgroundColor: '#94D7A2',
        border: '0px solid transparent'
      }
    }

  } else if(props.data.isCorrect === false){
    if(props.data.selected === props.option){
      style = {
        backgroundColor: '#F8BCBC',
        border: '0px solid transparent'
      }
    }
  }


return (
    <p
    style={style}
    onClick={
      () => props.getQuestionIdAndOption({
      questionId:props.questionId,
      selectedOption:props.option 
    })
    }>{props.option}
    </p>
  )

}
