import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { theme } from "./utils/colors";
import Card from "./components/card/Card";
import Homepage from "./pages/home/Homepage";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About.jsx";
import PolicyPrivacy from "./pages/policy/PolicyPrivacy";
import TermsConditions from "./pages/terms/TermsConditions.jsx";

const App = () => {
  const bgColor = {
    backgroundColor: theme?.colors?.primary,
  };
  return (
    <div className={` w-full h-full`} style={bgColor}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/privacy-policy" element={<PolicyPrivacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
