import { useSavedFacts } from "../context/SavedFactsContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const SavedFact = () => {
  const { savedFacts, removeFact } = useSavedFacts();
  return (
    <>
      <div className="banner flex h-16 w-full bg-amber-600 px-4 items-center">
        <Link
          to="/"
          className=" text-amber-900 w-9 h-9 bg-slate-100 grid place-content-center rounded-full"
        >
          <FaArrowLeft className="text-[1.2rem] font-[900]" />
        </Link>
        <h2 className="text-[30px] font-[900] ml-8">Saved Facts</h2>
      </div>
      <section className="save-page grid grid-cols-2 gap-2 px-4 min-h-full relative">
        {savedFacts.length === 0 ? (
          <p className="text-[1.3rem] absolute mt-10 ml-8 font-[600]">
            You haven't saved any facts yet
          </p>
        ) : (
          savedFacts.map((fact, index) => (
            <div
              key={index}
              className="bg-amber-700 px-4 py-4 text-slate-200 mt-16 relative rounded-[15px]"
            >
              <img
                src={fact.image}
                alt={fact.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h4 className="text-[25px] font-bold text-black">{fact.name}</h4>
              <p className="text-sm  mb-10">{fact.fact}</p>
              <button
                onClick={() => removeFact(fact)}
                className="px-2 py-1 text-amber-700 font-bold bg-white rounded-[8px] absolute bottom-2 right-4 hover:brightness-90"
              >
                Unsave
              </button>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default SavedFact;
