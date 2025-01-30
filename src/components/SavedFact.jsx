// import React from "react";
import { Link } from "react-router-dom";
const SavedFact = () => {
  return (
    <div>
      {/* link to navigate back */}
      <Link
        to="/"
        className="mt-6 text-amber-500 underline"
      >
        Back to Facts
      </Link>
    </div>
  );
};

export default SavedFact;
