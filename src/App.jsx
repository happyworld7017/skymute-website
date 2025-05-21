import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { theme } from "./utils/colors";
import Card from "./components/card/Card";
import Homepage from "./pages/home/Homepage";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About.jsx";
import PolicyPrivacy from "./pages/policy/PolicyPrivacy";
import TermsConditions from "./pages/terms/TermsConditions.jsx";
import { CONSTANTS } from "./utils/canstants.jsx";
import PageNotFound from "./pages/404/PageNotFound.jsx";

const App = () => {
  const bgColor = {
    backgroundColor: theme?.colors?.primary,
  };
  return (
    <div className={`w-full min-h-screen h-full`} style={bgColor}>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path={`/`} element={<Homepage />} />
          <Route path={`/policy-privacy`} element={<PolicyPrivacy />} />
          <Route path={`/about-us`} element={<About />} />
          <Route path={`/terms-condition`} element={<TermsConditions />} />

          <Route path={`*`} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
