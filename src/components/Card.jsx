import { useState,useEffect } from "react";
const Card =(props)=>{
const [isClicked,setIsClicked]=useState(false);

useEffect(()=>{
    if(props.isReset)
    setIsClicked(false);
})
const handleClick=()=>{
    if(!isClicked){
        console.log('wait');
        props.increaseScore();
        props.scrambleArray();
        setIsClicked(true);
    }

    else{
        props.resetScore();
    }
}

const link={...props.imgs}[`${props.id}`]
console.log(link);

return(
    
    <div className='card' onClick={handleClick}id={props.id}>
        <img src={link} alt="" />
    </div>
)
}
export default Card;