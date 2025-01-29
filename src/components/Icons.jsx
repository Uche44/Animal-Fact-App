import { FaSave, FaHeart } from "react-icons/fa";
// import { useState } from "react";
export const SaveIcon = () => {
  return (
    <FaSave
      className="text-[1.6rem] left-[1rem] text-amber-700 cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125"
      title="save fact"
    />
  );
};

export const HeartIcon = ({ isLiked, setIsLiked }) => {
  //   const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(true);
  };
  return (
    <FaHeart
      onClick={handleLike}
      style={{
        color: isLiked ? "#EC4899" : "#92400E",
        transition: "color 0.3s ease",
      }}
      className="text-[1.6rem] bottom-[1rem] left-[3.5rem]  cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125 "
      title="like"
    />
  );
};
