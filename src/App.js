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
          path="/whatwedo/health/hope-hospital-gurumandir"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/hope-hospital-zia-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/hope-hospital-thatta"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/hope-hospital-sujawal"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-manzoor-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-mujahhid-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-bilal-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-korangi"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-zia-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-langarpura"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-chikaar"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-kpk"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/health/maternal-center-mansehra"
          element={<Blog />}
        />
        <Route exact path="/whatwedo/health/health-unit" element={<Blog />} />
        <Route
          exact
          path="/whatwedo/health/health-unit-mobile"
          element={<Blog />}
        />

        <Route exact path="/whatwedo/education" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/education/zia-colony-school"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/education/muzaffargarh-school"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/education/thatta-school"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/education/kashmir-school"
          element={<Blog />}
        />

        <Route
          exact
          path="/whatwedo/vocational_training"
          element={<Subpage />}
        />
        <Route
          exact
          path="/whatwedo/vocational_training/vocational-center-zia-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/vocational_training/vocational-center-bilal-colony"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/vocational_training/vocational-center-thatta"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/vocational_training/vocational-center-badin"
          element={<Blog />}
        />

        <Route exact path="/whatwedo/aqua_project" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/aqua_project/aqua_project-details"
          element={<Blog />}
        />

        <Route exact path="/whatwedo/food_security" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/food_security/tackling-food-insecurity"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/food_security/monthly-food-rations"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/food_security/distribution-of-food"
          element={<Blog />}
        />

        <Route exact path="/whatwedo/emergency_relief" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/emergency_relief/2022-pakistan-floods"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/emergency_relief/2005-kashmir-earthquake"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/emergency_relief/swat-relief-operation"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/emergency_relief/2007-dadu-cyclone"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/emergency_relief/2008-balochistan-earthquake"
          element={<Blog />}
        />

        <Route exact path="/whatwedo/ramazan" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/ramazan/community-iftars"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/ramazan/door-to-door-iftars"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/ramazan/distribution-of-clothes"
          element={<Blog />}
        />
        <Route
          exact
          path="/whatwedo/ramazan/distribution-of-food-rations"
          element={<Blog />}
        />

        <Route exact path="/whatwedo/qurbani" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/qurbani/qurbani-udhiya-distribution"
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
