import { useState, useEffect } from "react";
import { FaSearch, FaHeart, FaSave, FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchPage from "./SearchPage";
import { useSavedFacts } from "../context/SavedFactsContext";
import toast from "react-hot-toast";
// my api key for api ninja   PkZK8NV+pP+PaeVYU8E2ig==jHkb6rWkBfo8Lmy6

// entire page
export default function Factpage() {
  const [facts, setFacts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [showSearchPage, setShowSearchPage] = useState(false);
  const [filteredFacts, setFilteredFacts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const { saveFact } = useSavedFacts();
  const navigate = useNavigate();
  useEffect(() => {
    async function getFact() {
      try {
        const response = await fetch("http://localhost:3000/animals");
        const facts = await response.json();

        if (facts && facts.length) setFacts(facts);
        // setFilteredFacts(facts);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    }
    getFact();
  }, [facts]);

  const changeFact = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length);
    if (facts.length === 0) {
      return <p>No facts available</p>;
    }
    setIsLiked(false);
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
  const handleLike = () => {
    setIsLiked(true);
  };
  const handleSave = () => {
    if (facts.length > 0) {
      saveFact(facts[currentIndex]);
      toast.success("Fact Saved");
      console.log("fact saved");
    } else {
      console.error("save failed");
    }
  };
  return (
    <>
      {showSearchPage ? (
        <SearchPage
          onBack={goToFactPage}
          facts={facts}
          filteredFacts={filteredFacts}
          setFilteredFacts={setFilteredFacts}
          isLiked={isLiked}
          setIsLiked={setIsLiked}
        />
      ) : (
        <section className="fact-page flex flex-col items-center">
          <div className="save fixed right-4 top-[4.5rem] h-[3rem] w-[3rem] bg-white rounded-[10px] flex items-center justify-center sm:h-[3rem] sm:w-[3rem] hover:brightness-90 cursor-pointer">
            <FaSave
              className="text-[1.6rem] text-amber-700 cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125"
              title="saved facts"
              onClick={() => navigate("./SavedFact.jsx")}
            />
          </div>
          {/* search icon */}
          <div className="search fixed right-4 top-4 h-[3rem] w-[3rem] rounded-4 bg-white rounded-full flex items-center justify-center sm:h-[3rem] sm:w-[3rem] hover:brightness-90 cursor-pointer">
            <FaSearch
              onClick={goToSearchPage}
              className="search-icon text-[1.6rem] text-amber-700 sm:text-[2rem]"
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
                <FaDownload
                  onClick={handleSave}
                  className="text-[1.6rem] left-[1rem] text-amber-700 cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125"
                  title="save fact"
                />
                <FaHeart
                  onClick={handleLike}
                  style={{
                    color: isLiked ? "#EC4899" : "#92400E",
                    transition: "color 0.3s ease",
                  }}
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
