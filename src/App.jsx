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
  <dialog open>
  <form  method="dialog">
    <h3>
    Welcome! I hope you brought your appetite! See if you can eat every single food in this list!
    But be careful..You need to try to avoid eating the same item twice, because that wouldn't be a very balanced diet, now would it?
    Click item to munch.

    </h3>
   <button>Yum!</button>
  </form>
    </dialog>
  <ScoreBoard score = {score} isReset={isReset}/>
  <DisplayPanel {...props}/>
  </>
  )
}
export default App
