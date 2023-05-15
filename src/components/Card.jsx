import { useState } from "react";
const Card =(props)=>{

const [isClicked,setIsClicked]=useState(false);
const handleClick=()=>{
    if(!isClicked){
        props.increaseScore();
        setIsClicked(true);
    }

    else{
        props.resetScore();
    }
}

return<button onClick={handleClick}>{isClicked?'true':'false'}</button>
}
export default Card;