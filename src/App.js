import './App.css';
import Homepage from './pages/Homepage';
import Whatwedo from './pages/Whatwedo';
import Subpage from './pages/Subpage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';

function App() {
  return (
    <BrowserRouter>
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

        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
