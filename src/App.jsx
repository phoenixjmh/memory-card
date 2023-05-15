import { useState ,useEffect} from 'react'
import ScoreBoard from './components/ScoreBoard'
import DisplayPanel from './components/DisplayPanel'
import './App.css'


const App = ()=>{
  const [score,setScore] = useState(0);
  const [isReset,setIsReset] = useState(false);
  const increaseScore=()=>setScore(score+1);
  
  useEffect(()=>isReset?setIsReset(false):setIsReset(false))
  
  const resetScore=()=>{
    setIsReset(true);
    setScore(0);
  };
  const props={
    increaseScore:increaseScore,
    resetScore:resetScore,
    isReset:isReset,
  }
  return (
  <>
  <ScoreBoard score = {score}/>
  <DisplayPanel {...props}/>
  </>
  )
}
export default App
