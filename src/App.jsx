import { useState ,useEffect,useCallback} from 'react'
import ScoreBoard from './components/ScoreBoard'
import DisplayPanel from './components/DisplayPanel'
import './App.css'


const App = ()=>{
  const [score,setScore] = useState(0);
  const [isReset,setIsReset] = useState(false);
  const [addPoint,setAddPoint]=useState(false);
  console.log(isReset);
  let increaseScore=()=>{
   setAddPoint(true);
  };

  useEffect(()=>{
    if(addPoint)
    setScore(score+1);
    setAddPoint(false);
});

  useEffect(()=>
  {
    setIsReset(false);
  },[isReset]);
  
  const resetScore=()=>{
    setIsReset(true);
    setScore(0);
  };
  let props={
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
