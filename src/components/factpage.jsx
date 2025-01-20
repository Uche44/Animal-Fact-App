// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

// my api key for api ninja   PkZK8NV+pP+PaeVYU8E2ig==jHkb6rWkBfo8Lmy6

const Factcard = () => {
  // for the favourite icon

  const [color, setColor] = useState("#D97706");
  const handleClick = () => {
    setColor((prevColor) => (prevColor == "#D97706" ? "#DB2777" : "#D97706"));
  };

  return (
    <section className="fact-card h-5/6 w-[28rem] rounded-t-full text-center bg-white -z-10 fixed top-56 flex flex-col items-center px-[4rem] sm:w-[80%] sm:h-fit sm:rounded-[3rem] sm:static sm:px-[1rem] sm:py-[1rem]">
      <h3 className="dyk mt-40 text-3xl font-bold mb-2 text-amber-950 sm:mt-[1rem]">
        Did You Know
      </h3>
      <p className="fact">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi illo
        blanditiis dolor dicta. Error et tempora hic ut cumque, sequi sunt
        reiciendis dignissimos at nobis labore, voluptatem doloribus vitae
        aliquam. Lorem ipsum dolor sit amet consectetur
      </p>

      <div className="icons-btn flex justify-between mt-[2rem] w-[100%] sm:px-[2.7rem] sm:pb-[1rem]">
        <div className="icons w-[4rem] h-[2rem] flex self-end justify-between">
          <FaSave
            className="text-[1.6rem] left-[1rem] text-amber-700 cursor-pointer"
            title="save fact"
          />
          <FaHeart
            style={{ color: color, transition: "color 0.3s ease" }}
            onClick={handleClick}
            className="text-[1.6rem] bottom-[1rem] left-[3.5rem]  cursor-pointer"
            title="like"
          />
        </div>
        <button className="bg-amber-700 h-[2.5rem] w-[6rem] text-white font-semibold cursor-pointer hover:brightness-120 rounded-[0.5rem] sm:h-[2.5rem] sm:cursor-pointer">
          New Fact
        </button>
      </div>
    </section>
  );
};
export default function Factpage() {
  return (
    <>
      <section className="fact-page flex flex-col items-center">
        {/* search icon */}
        <div className="search fixed right-4 top-4 h-[3.5rem] w-[3.5rem] rounded-4 bg-white rounded-full flex items-center justify-center sm:h-[3rem] sm:w-[3rem]">
          <FaSearch className="search-icon text-[2.1rem] text-amber-700 sm:text-[2rem]" />
        </div>
        <div className="animal-name w-fit h-16 flex items-center justify-center fixed top-10 shadow-slate-500 bg-white rounded-[1rem] p-2">
          <h4 className="text-[2.8rem] font-bold text-amber-800 ">LIONS</h4>
        </div>
        <div className="animal-image bg-amber-800 h-[20rem] w-5/6 border-amber-500 border-4 rounded-full mt-16 sm:h-64 sm:w-64 flex items-center justify-center sm: sm:mb-[2rem]">
          <img
            src="/lion.jpg"
            className="w-[95%] h-[95%] rounded-full"
            alt=""
          />
        </div>
        <Factcard />
      </section>
    </>
  );
}
