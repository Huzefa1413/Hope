import './App.css';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Whatwedo from './pages/Whatwedo';
import Subpage from './pages/Subpage';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import SingleImpact from './components/SingleImpact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/whatwedo" element={<Whatwedo />} />
        <Route exact path="/whatwedo/health" element={<Subpage />} />
        <Route
          exact
          path="/whatwedo/health/karachi-hospital"
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
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/health_care" element={<SingleImpact />} />
        <Route exact path="/education" element={<SingleImpact />} />
        <Route exact path="/vocational_training" element={<SingleImpact />} />
        <Route exact path="/aqua_project" element={<SingleImpact />} />
        <Route exact path="/emergency_relief" element={<SingleImpact />} />

        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
