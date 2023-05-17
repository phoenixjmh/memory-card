import { useState, useEffect } from "react";
const Card = ({
  gameOver,
  increaseScore,
  scrambleArray,
  resetScore,
  imgs,
  id,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (gameOver) setIsClicked(false);
  }, [gameOver]);

  const handleClick = () => {
    if (!isClicked) {
      increaseScore();
      setIsClicked(true);
      scrambleArray();
    } else {
      resetScore();
    }
  };
  const link = { ...imgs }[`${id}`];

  return (
    <div className="card" onClick={handleClick} id={id}>
      <img src={link} alt="" />
    </div>
  );
};
export default Card;
