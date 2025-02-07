import Factpage from "./components/factpage.jsx";
// import SavedFact from "./components/SavedFact.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Factpage />}
        />
        <Route
          path="*"
          element={<div>This page does not exist</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}
