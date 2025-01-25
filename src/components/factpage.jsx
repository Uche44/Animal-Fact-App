// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaSave } from "react-icons/fa";

import SearchPage from "./SearchPage";
// my api key for api ninja   PkZK8NV+pP+PaeVYU8E2ig==jHkb6rWkBfo8Lmy6

// entire page
export default function Factpage() {
  const [facts, setFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState("#92400E");
  const [showSearchPage, setShowSearchPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    async function getFact() {
      try {
        const response = await fetch("http://localhost:3000/animals");
        const facts = await response.json();

        if (facts && facts.length) setFacts(facts);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    }
    getFact();
  }, [facts]);

  const handleClick = () => {
    setColor((prevColor) => (prevColor == "#92400E" ? "#EC4899" : "#92400E"));
  };
  const changeFact = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length);
    if (facts.length === 0) {
      return <p>No facts available</p>;
    }
  };
  if (isLoading) {
    return <p>Loading facts...</p>;
  }
  const goToSearchPage = () => {
    setShowSearchPage(true);
  };
  const goToFactPage = () => {
    setShowSearchPage(false);
  };
  return (
    <>
      {showSearchPage ? (
        <SearchPage onBack={goToFactPage} />
      ) : (
        <section className="fact-page flex flex-col items-center">
          {/* search icon */}
          <div className="search fixed right-4 top-4 h-[3.5rem] w-[3.5rem] rounded-4 bg-white rounded-full flex items-center justify-center sm:h-[3rem] sm:w-[3rem] hover:brightness-90 cursor-pointer">
            <FaSearch
              onClick={goToSearchPage}
              className="search-icon text-[2.1rem] text-amber-700 sm:text-[2rem]"
            />
          </div>
          <div className="animal-name w-fit h-16 flex items-center justify-center fixed top-10 shadow-slate-500 bg-white rounded-[1rem] p-2">
            <h4 className="text-[2.8rem] font-bold text-amber-800 ">
              {facts[currentIndex].name}
            </h4>
          </div>
          <div className="animal-image h-[20rem] border-4 w-5/6 border-amber-500  rounded-full mt-16 sm:h-64 sm:w-64 flex items-center justify-center sm: sm:mb-[2rem]">
            <img
              src={`http://localhost:3000/${facts[currentIndex]["image"]}`}
              className="w-[90%] h-[90%] rounded-full"
              alt={facts[currentIndex]["image"]}
            />
          </div>
          {/* fact card */}
          <section className="fact-card h-5/6 w-[28rem] rounded-t-full text-center bg-white -z-10 fixed top-56 flex flex-col items-center px-[4rem] sm:w-[80%] sm:h-fit sm:rounded-[3rem] sm:static sm:px-[1rem] sm:py-[1rem]">
            <h3 className="dyk mt-44 text-[2rem] font-[800] mb-3 text-amber-950 sm:mt-[1rem]">
              Did You Know
            </h3>
            <div className="fact-container h-[7rem] w-[100%] pt-2 px-2 rounded-[1rem]">
              <p className="text-[1.3rem] font-semibold text-center">
                {facts[currentIndex].fact}
              </p>
            </div>

            <div className="icons-btn flex justify-between mt-[1rem] w-[100%] sm:px-[2.7rem] sm:pb-[1rem]">
              <div className="icons w-[4rem] h-[2rem] flex self-end justify-between">
                <FaSave
                  className="text-[1.6rem] left-[1rem] text-amber-700 cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125"
                  title="save fact"
                />
                <FaHeart
                  style={{ color: color, transition: "color 0.3s ease" }}
                  onClick={handleClick}
                  className="text-[1.6rem] bottom-[1rem] left-[3.5rem]  cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125 "
                  title="like"
                />
              </div>
              <button
                onClick={changeFact}
                className="bg-amber-700 h-[3rem] w-[7rem] text-white hover:brightness-125 font-semibold active:scale-90 transition-transform duration-150 cursor-pointer rounded-[0.5rem] sm:h-[2.5rem] sm:cursor-pointer"
              >
                New Fact
              </button>
            </div>
          </section>
        </section>
      )}
    </>
  );
}
