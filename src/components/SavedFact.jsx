import { useSavedFacts } from "../context/SavedFactsContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const SavedFact = () => {
  const { savedFacts, removeFact } = useSavedFacts();
  return (
    <section className="save-page grid grid-cols-2 gap-2 px-4">
      {/* link to navigate back */}
      <Link
        to="/"
        className="mt-6 text-amber-800 underline"
      >
        <FaArrowLeft className="text-[1.2rem]" />
      </Link>
      <h2 className="text-[2rem]">Saved Facts</h2>
      {savedFacts.length === 0 ? (
        <p className="text-[1rem] font-[500]">
          You haven't saved any facts yet
        </p>
      ) : (
        savedFacts.map((fact, index) => (
          <div key={index}>
            <img
              src={`http://localhost:3000/${fact.image}`}
              alt={fact.name}
              className="w-full h-44 object-cover rounded-lg mb-2"
            />
            <h4 className="text-[25px] font-bold text-amber-800 mb-2">
              {fact.name}
            </h4>
            <p className="text-sm text-amber-700 mb-6">{fact.fact}</p>
            <button
              onClick={() => removeFact(fact)}
              className="px-2 py-1 text-amber-700 font-bold bg-white rounded-[8px]"
            >
              Unsave
            </button>
          </div>
        ))
      )}
    </section>
  );
};

export default SavedFact;
