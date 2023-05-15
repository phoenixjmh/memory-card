import { useState } from "react";
import Card from "./Card";
const DisplayPanel = (props)=>{
        const cards=[
        <Card {...props}/>,
        <Card {...props}/>,
        <Card {...props}/>,
        <Card {...props}/>];
            
            return cards.map((card,index)=><div className="card" key={card+index}>{card}</div>)

    
}

export default DisplayPanel;