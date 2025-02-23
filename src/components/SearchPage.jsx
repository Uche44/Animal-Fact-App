import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SearchPage = ({
  onBack,
  facts,
  filteredFacts,
  setFilteredFacts,
  isLiked,
  setIsLiked,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filterText, setFilterText] = useState("");
  const [hasSearched, setHasSearched] = useState(false);


  const types = [
    "All",
    "mammals",
    "birds",
    "marine",
    "reptiles",
    "insects",
    "amphibians",
  ];
  const handleClick = (e) => {
    setInputValue(e.target.value.toLowerCase());
    setFilterText(e.target.value.toLowerCase());
  };
  const handleChange = (e) => {
    setFilterText(e.target.value.toLowerCase());
    setInputValue(e.target.value.toLowerCase());
  };
  const handleFilter = () => {
    const filtered =
      filterText === "all"
        ? facts
        : facts.filter((fact) =>
            fact.category.toLowerCase().includes(filterText)
          );
    setFilteredFacts(filtered);
  };
  useEffect(() => {
    handleFilter();
  }, [filterText, facts]);

  return (
    <>
      {hasSearched ? (
        <section className="min-h-full w-full py-6 bg-amber-100">
          {/* Search header with icon */}
          <div
            className="fixed top-0 z-10 h-[3.5rem] bg-amber-300 w-full ml-0 mb-[2rem]"
            role="banner"
          >
            <h2 className="text-2xl mt-4 font-bold text-amber-800 ml-4 ">
              {inputValue.toUpperCase()}
            </h2>
            <FaSearch
              className="text-[2rem] text-amber-700 cursor-pointer absolute top-4 right-4 hover:text-amber-500"
              title="Search"
              onClick={() => setHasSearched(false)}
            />
          </div>

          {/* Filtered facts display */}
          <div className="mt-6 mx-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFacts.map((fact, index) => (
              <div
                key={index}
                className="fact-card p-4 rounded-lg shadow-md border border-amber-300 bg-white relative"
              >
                <img
                  // src={`http://localhost:3000/${fact.image}`}
                  src={fact.image}
                  alt={fact.name}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h4 className="text-[25px] font-bold text-amber-800 mb-2">
                  {fact.name}
                </h4>
                <p className="text-sm text-amber-700 mb-6">{fact.fact}</p>
                {/* <FaHeart
                  onClick={(e) => setIsLiked(true)}
                  style={{
                    color: isLiked ? "#EC4899" : "#92400E",
                    transition: "color 0.3s ease",
                  }}
                  className="text-[1.3rem] cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125 absolute bottom-4 right-11"
                  title="like"
                />
                <FaSave
                  className="text-[1.3rem]  text-amber-700 cursor-pointer active:scale-90 transition-transform duration-150 hover:brightness-125 absolute bottom-4 right-4"
                  title="save fact"
                /> */}
              </div>
            ))}
          </div>

          {/* Back button */}
          <button
            className="h-[3rem] w-[3rem] rounded-full mt-3 grid place-content-center border-2 bg-amber-400 hover:bg-amber-300"
            onClick={onBack}
          >
            <FaArrowLeft className="text-amber-700 text-[20px] font-[500] active:scale-90 transition-transform duration-150" />
          </button>
        </section>
      ) : (
        // search page
        <section className="h-[100vh] w-full py-6 px-4 bg-white">
          <div className="search h-[3.5rem] w-full flex items-center gap-4 ">
            <input
              className="h-full w-[80%] rounded-full px-4 text-[1.1rem] bg-amber-300 text-amber-700 font-[500]"
              type="text"
              placeholder="search by category"
              value={inputValue}
              onChange={handleChange}
            />
            <div className="search h-full w-[3.5rem] rounded-4 bg-white rounded-full flex items-center justify-center sm:h-[3rem] sm:w-[3rem] hover:bg-amber-200 cursor-pointer">
              <FaSearch
                className="search-icon text-[2.1rem] text-amber-700 sm:text-[2rem]"
                onClick={() => {
                  setHasSearched(true);
                }}
              />
            </div>
          </div>
          {/* filter boxes */}
          <div className=" mt-5 w-full h-fit grid grid-cols-3 grid-rows-2 gap-1">
            {types
              .filter((type) => type.toLowerCase().includes(filterText))
              .map((type, index) => (
                <button
                  key={index}
                  className="h-[3.3rem] w-100 text-amber-700 font-bold text-[18px] rounded-[10px] border-none hover:bg-amber-300 bg-amber-200 active:scale-90 transition-transform duration-150"
                  value={type}
                  onClick={handleClick}
                >
                  {type}
                </button>
              ))}
          </div>
          <button className="h-[3rem] w-[3rem] rounded-full mt-3 grid place-content-center border-2 bg-amber-400 hover:bg-amber-300">
            <FaArrowLeft
              className="text-amber-700 text-[20px] font-[500] active:scale-90 transition-transform duration-150"
              onClick={onBack}
            />
          </button>
        </section>
      )}
    </>
  );
};
export default SearchPage;
