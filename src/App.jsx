import Factpage from "./components/factpage.jsx";
import SavedFact from "./components/SavedFact.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { SavedFactsProvider } from "./context/SavedFactsContext.jsx";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <SavedFactsProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Factpage />}
            />
            <Route
              path="*"
              element={<SavedFact />}
            />
          </Routes>
        </BrowserRouter>
      </SavedFactsProvider>
    </>
  );
}
