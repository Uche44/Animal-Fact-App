// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// <Router>
//   <Routes>
//     <Route
//       path="/"
//       element={<Factpage />}
//     />
//     <Route
//       path="/saved"
//       element={<SavedFact />}
//     />
//   </Routes>
// </Router>
