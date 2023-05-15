import { useState ,useEffect} from "react";

// eslint-disable-next-line react/prop-types
const ScoreBoard = (props)=>{
    const [highscore,setHighScore] = useState(0);
    useEffect(()=>{
        if(props.score>highscore){
            setHighScore(props.score);
        }
    },[props.score,highscore])
    return (
        <>
        <p id="currentScore">{props.score}</p>
        <p id="highscore">{highscore}</p>
        </>
    );
}
export default ScoreBoard;