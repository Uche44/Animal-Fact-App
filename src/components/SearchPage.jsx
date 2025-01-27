import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SearchPage = ({ onBack }) => {
  const [inputValue, setInputValue] = useState("");
  const [filterText, setFilterText] = useState("");

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
  // const handleFilter = () => {
  //   const filtered = facts.filter((fact) => fact.toLowerCase().includes());
  // };
  return (
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
            // onClick={handleFilter}
          />
        </div>
      </div>
      {/* filter boxes */}
      <div className=" mt-5 w-full h-fit grid grid-cols-3 grid-rows-2 gap-1">
        {/* {types.map((type, index) => (
          <button
            key={index}
            className="h-[3.3rem] w-100 text-amber-700 font-bold text-[18px] rounded-[10px] border-none hover:bg-amber-300 bg-amber-200 active:scale-90 transition-transform duration-150"
            value={type}
            onClick={handleClick}
          >
            {type}
          </button>
        ))} */}

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
  );
};
export default SearchPage;
