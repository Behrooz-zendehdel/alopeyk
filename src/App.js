import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Pages/Services/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Header />} />
        <Route path="" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
