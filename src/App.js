import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./Pages/Services/Services";
import Bizines from "./Pages/Bizines/Bizines";
import Register from "./Pages/Register/Register";
import Education from "./Pages/Education/Education";
import Weblog from "./Pages/Weblog/Weblog";
import About from "./Pages/About/About";
import Home from "./Components/Home/Home";
import Alopeyk from "./Pages/Services/Alopeyk";
import Alotaxi from "./Pages/Services/Alotaxi";
import Alovanet from "./Pages/Services/Alovanet";
import Alopost from "./Pages/Services/Alopost";
import Aloforosh from "./Pages/Services/Aloforosh";
import Sefaresh from "./Pages/Bizines/Sefaresh";
import WebService from "./Pages/Bizines/WebService";
import Contact from "./Pages/About/Contact";
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
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/services/alopeyk" element={<Alopeyk />} />
        <Route path="/services/alotaxi" element={<Alotaxi />} />
        <Route path="/services/alovanet" element={<Alovanet />} />
        <Route path="/services/alopost" element={<Alopost />} />
        <Route path="/services/aloforosh" element={<Aloforosh />} />
        <Route path="/bizines/sefaresh" element={<Sefaresh />} />
        <Route path="/bizines/webservice" element={<WebService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
