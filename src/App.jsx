import { useState } from 'react'
import ScoreBoard from './components/ScoreBoard'
import DisplayPanel from './components/DisplayPanel'
import './App.css'


const App = ()=>{
  const [score,setScore] = useState(0);
  const increaseScore=()=>{
    console.log('Sub',score);
    setScore(score+1)
  };

  const resetScore=()=>{
    console.log('resetting');
    setScore(0)
  };
  
  return (
  <>
  <ScoreBoard score = {score}/>
  <DisplayPanel increaseScore={increaseScore} resetScore={resetScore}/>
  </>
  )
}
export default App
