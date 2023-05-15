import { useState,useEffect } from "react";
const Card =(props)=>{
const [isClicked,setIsClicked]=useState(false);

useEffect(()=>{
    if(props.isReset)
    setIsClicked(false);
},[props.isReset])
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