import axios from 'axios';
import { nanoid } from 'nanoid'
import React from 'react';
import { useState,useEffect } from 'react';
import Questions from './components/questions';
import HomePage from './components/homePage'
import Footer from './components/footer.js'

function App() {

  const triviaURL = 'https://opentdb.com/api.php?amount=10&category=30&type=multiple'

const [appState,setAppState] = useState({
  status:false,
})

const [questions,setQuestions] = useState([])


useEffect(()=>{
  getQuestions();
  
},[])




const appStatus = ()=>{
  setAppState({
    status:true
  })
}

const getQuestions = async ()=>{
  const questions = await axios.get(triviaURL)

  const  questionsAndAnswers =  questions.data.results.map(data =>{

    const  randomPosition = Math.floor(Math.random() * (4 - 0) + 0);
    let q={
      id:nanoid(),
      question:data.question,
      options:[...data.incorrect_answers],
      correct_answer:data.correct_answer,
      selected:false,
      isCorrect:null,
    }

    q.options.splice(randomPosition, 0, data.correct_answer)

    return q
})

setQuestions(questionsAndAnswers)
}
// console.log(questions);

function getQuestionIdAndOption (data) {
  // console.log(data);
  const updatedQuestions = questions.map(el => {
    if(data.questionId === el.id) el.selected = data.selectedOption;
    return el
  })
  
 setQuestions(updatedQuestions);

}

function checkAnwers () {
  const stylesUpdatedQuestions = questions.map(el => {
    el.selected === el.correct_answer ? el.isCorrect=true : el.isCorrect=false;
    return el
  })
  

  setQuestions(stylesUpdatedQuestions);
}

function answersChecked () {
  return
}


return (
  <div className="App">
    { !appState.status ? <HomePage appStatus={appStatus}/> :  
      questions.map((data,i) => <Questions key={i} getQuestionIdAndOption={getQuestionIdAndOption} data={data} answersChecked={answersChecked}/>)
     }
     {
      !appState.status ? "" : <Footer checkAnwers={checkAnwers}/>
     }
  </div>

  );
}

export default App;