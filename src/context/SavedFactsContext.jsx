import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
const SavedFactsContext = createContext();
export const useSavedFacts = () => useContext(SavedFactsContext);

export const SavedFactsProvider = ({ children }) => {
  const [savedFacts, setSavedFacts] = useState(() => {
    const storedFacts = JSON.parse(localStorage.getItem("savedFacts"));
    return storedFacts ? JSON.parse(storedFacts) : [];
  });

  //   on mount load
  // useEffect(() => {
  //   const storedFacts = JSON.parse(localStorage.getItem("savedFacts")) || [];
  //   setSavedFacts(storedFacts);
  //   if (storedFacts) {
  //     setSavedFacts(storedFacts);
  //   }
  // }, []);

  //   save to local storage anytime savedfact changes
  useEffect(() => {
    localStorage.setItem("savedFacts", JSON.stringify(savedFacts));
  }, [savedFacts]);

  const saveFact = (fact) => {
    if (!savedFacts.some((saved) => saved.fact === fact.fact)) {
      const updatedFacts = [...savedFacts, fact];
      setSavedFacts(updatedFacts);
      localStorage.setItem("savedFacts", JSON.stringify(updatedFacts));
    }
  };

  const removeFact = (factToRemove) => {
    const updatedFacts = savedFacts.filter(
      (fact) => fact.fact !== factToRemove.fact
    );
    setSavedFacts(updatedFacts);
    localStorage.setItem("savedFacts", JSON.stringify(updatedFacts));
    toast.error("Fact removed!");
    console.log("fact unsaved");
  };
  return (
    <SavedFactsContext.Provider value={{ savedFacts, saveFact, removeFact }}>
      {children}
    </SavedFactsContext.Provider>
  );
};
