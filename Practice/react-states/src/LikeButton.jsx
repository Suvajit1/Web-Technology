import { useState } from "react";

export default function LikeButton() {
  let [isLike, setIsLike] = useState(false);
  let [clicks, setClicks] = useState(0);

  function toggleLike() {
    setIsLike(!isLike);
    setClicks(clicks+1);
  }

  let likeStyle = { color: "red" };

  return (
    <div>
        <p>Count Clicks = {clicks}</p>
      Like Button!
      <p onClick={toggleLike}>
        {isLike ? (
          <i style={likeStyle} className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
