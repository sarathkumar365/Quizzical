import axios from 'axios';
import { nanoid } from 'nanoid'
import React from 'react';
import { useState,useEffect } from 'react';
import Questions from './components/questions';
import HomePage from './components/homePage'

function App() {

  const triviaURL = 'https://opentdb.com/api.php?amount=10&category=30&type=multiple'

const [appState,setAppState] = useState({
  status:false
})

const [questions,setQuestions] = useState([])

const [selected,setSelected] = useState([])



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
      correct_answer:data.correct_answer
    }

    q.options.splice(randomPosition, 0, data.correct_answer)

    return q
})

setQuestions(questionsAndAnswers)
}


return (
  <div className="App">
    { !appState.status ? <HomePage appStatus={appStatus}/> :  
      questions.map((data,i) => <Questions key={i} data={data} />)
     }
  </div>

  );
}

export default App;