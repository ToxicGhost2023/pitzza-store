"use client";

import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount + 1);
    }
    setLiked(true);
  };
  
  return (
    <button
      onClick={toggleLike}
      className="flex items-center space-x-2 text-y1 focus:outline-none"
    >
      {liked ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}
      <span>
        {liked}
        {likeCount}
      </span>
    </button>
  );
}

export default LikeButton;
