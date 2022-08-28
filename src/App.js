import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./Pages/Services/Services";
import Bizines from "./Pages/Bizines/Bizines";
import Register from "./Pages/Register/Register";
import Education from "./Pages/Education/Education";
import Weblog from "./Pages/Weblog/Weblog";
import About from "./Pages/About/About";
import Home from "./Components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bizines" element={<Bizines />} />
        <Route path="/register" element={<Register />} />
        <Route path="/education" element={<Education />} />
        <Route path="/weblog" element={<Weblog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
