import { useState, useEffect, useMemo } from "react";
import React from "react";
import Card from "./Card";
import imageLinks from "../assets/imageLinks";

const DisplayPanel = (props) => {
  let [gameOver, setGameOver] = useState(false);
  gameOver ? console.log("GAMEOVER") : 0;
  useEffect(() => {
    setGameOver(props.isReset);
  }, [props.isReset, setGameOver]);

  const scrambleArray = () => {
    let dataCopy = data.slice();
    let sorted = dataCopy.sort((a, b) => Math.random() - 0.5);
    setData(sorted);
  };

  const [data, setData] = useState([
    { id: "orange" },
    { id: "banana" },
    { id: "tomato" },
    { id: "apple" },
    { id: "brocolli" },
    { id: "carrot" },
    { id: "lemon" },
    { id: "grapefruit" },
    { id: "bell" },
    { id: "kiwi" },
    { id: "onion" },
    { id: "garlic" },
    { id: "strawberry" },
    { id: "potato" },
  ]);
  return (
    <div className="display-panel">
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            {...props}
            imgs={imageLinks}
            gameOver={gameOver}
            id={item.id}
            scrambleArray={scrambleArray}
          ></Card>
        );
      })}
    </div>
  );
};

export default DisplayPanel;
