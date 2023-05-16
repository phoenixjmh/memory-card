import { useState ,useEffect} from "react";

// eslint-disable-next-line react/prop-types
const ScoreBoard = (props)=>{
    let restartStyle=false;
    const [highscore,setHighScore] = useState(0);
    useEffect(()=>{
        if(props.score>highscore){
            setHighScore(props.score);
        }
        if(props.score===0){
            restartStyle=true;
        }

    },[props.score,highscore])
    return (
        <div className="scoreBoard">
            <h1 id="title">
                Fruits and Veggies Memory Game
            </h1>
            <h3>A Dietary Guideline</h3>
        
           
        
        <h5 id="highscore">BEST SCORE: {highscore}</h5>
        <h2 className={props.isReset?'gameOver':'post-reset'} id="currentScore">CURRENT SCORE: {props.score}</h2>
       
        
        </div>
    );
}
export default ScoreBoard;