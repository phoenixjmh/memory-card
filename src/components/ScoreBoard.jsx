import { useState ,useEffect} from "react";

// eslint-disable-next-line react/prop-types
const ScoreBoard = (props)=>{
    console.log('SCOREBOARD',props.score)
    const [highscore,setHighScore] = useState(0);
    useEffect(()=>{
        if(props.score>highscore){
            setHighScore(props.score);
        }

    },[props.score,highscore])
    return (
        <div className="scoreBoard">
            <h1 id="title">
                MEMORY GAME
            </h1>
        <p id="currentScore">CURRENT SCORE: {props.score}</p>
        <p id="highscore">BEST SCORE: {highscore}</p>
        </div>
    );
}
export default ScoreBoard;