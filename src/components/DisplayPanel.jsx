import Card from "./Card";
// eslint-disable-next-line react/prop-types
const DisplayPanel = (props)=>{

    return (
        <>
        <Card increaseScore={props.increaseScore} resetScore={props.resetScore}/>
        <Card increaseScore={props.increaseScore} resetScore={props.resetScore}/>
        <Card increaseScore={props.increaseScore} resetScore={props.resetScore}/>
        <Card increaseScore={props.increaseScore} resetScore={props.resetScore}/>
        </>

    )
}

export default DisplayPanel;