import { useState ,useEffect} from "react";

// eslint-disable-next-line react/prop-types
const ScoreBoard = ({score})=>{
    const [highscore,setHighScore] = useState(0);
    useEffect(()=>{
        console.log(score);
        if(score>highscore){
            setHighScore(score);
        }
    },[score,highscore])
    return (
        <>
        <p id="currentScore">{score}</p>
        <p id="highscore">{highscore}</p>
        </>
    );
}
export default ScoreBoard;