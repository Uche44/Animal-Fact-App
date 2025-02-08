import { useSavedFacts } from "../context/SavedFactsContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const SavedFact = () => {
  const { savedFacts, removeFact } = useSavedFacts();
  return (
    <section className="save-page grid grid-cols-2">
      {/* link to navigate back */}
      <Link
        to="/"
        className="mt-6 text-amber-800 underline"
      >
        <FaArrowLeft />
      </Link>
      <h2 className="">Saved Facts</h2>
      {savedFacts.length === 0 ? (
        <p>You havent saved any facts yet</p>
      ) : (
        savedFacts.map((fact, index) => (
          <div key={index}>
            <img
              src={`http://localhost:3000/${fact.image}`}
              alt={fact.name}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <h4 className="text-[25px] font-bold text-amber-800 mb-2">
              {fact.name}
            </h4>
            <p className="text-sm text-amber-700 mb-6">{fact.fact}</p>
            <button onClick={() => removeFact(fact)}>Unsave</button>
          </div>
        ))
      )}
    </section>
  );
};

export default SavedFact;
