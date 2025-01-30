import Factpage from "./components/factpage";
import SavedFact from "./components/SavedFact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Factpage />}
        />
        <Route
          path="/saved"
          element={<SavedFact />}
        />
      </Routes>
    </Router>
  );
}
