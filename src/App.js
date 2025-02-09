import "./App.css";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Whatwedo from "./pages/Whatwedo";
import Subpage from "./pages/Subpage";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import SingleImpact from "./components/SingleImpact";
import AboutUs from "./pages/AboutUs";
import Research from "./pages/Research";
import Scientists from "./pages/research/Scientists";
import Publications from "./pages/research/Publications";
import Projects from "./pages/research/Projects";
import Papers from "./pages/research/Papers";
import LatestNews from "./pages/LatestNews";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Homepage />} />

        <Route exact path="/aboutus" element={<AboutUs />} />

        <Route exact path="/whatwedo" element={<Whatwedo />} />
        <Route exact path="/whatwedo/health" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/health/karachi-hospital"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-child-center"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/medical-center-hub"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/medical-center-sujawal"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/mobile-health-unit-mhu"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/nutrition-2007"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/nutrition-2010-2011"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/pg-purifier-of-water-distribution"
          element={<Blog />}
        />
        <Route exact path="/whatwedo/education" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/education/barclays-hope-home-schools"
          element={<Blog />}
        />
        <Route exact path="/whatwedo/services" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/services/vocational-centers"
          element={<Blog />}
        />

        <Route exact path="/latest-news" element={<LatestNews />} />

        <Route exact path="/research" element={<Research />} />
        <Route exact path="/research/papers" element={<Papers />} />
        <Route exact path="/research/projects" element={<Projects />} />
        <Route exact path="/research/publications" element={<Publications />} />
        <Route exact path="/research/scientists" element={<Scientists />} />

        <Route exact path="/contactus" element={<ContactUs />} />

        <Route exact path="/health_care" element={<SingleImpact />} />
        <Route exact path="/education" element={<SingleImpact />} />
        <Route exact path="/vocational_training" element={<SingleImpact />} />
        <Route exact path="/aqua_project" element={<SingleImpact />} />
        <Route exact path="/emergency_relief" element={<SingleImpact />} />
        <Route exact path="/food_security" element={<SingleImpact />} />
        <Route exact path="/ramazan_activities" element={<SingleImpact />} />
        <Route exact path="/qurbani_udhiya" element={<SingleImpact />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
