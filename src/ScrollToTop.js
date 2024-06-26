import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Adjust based on your routing library

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, [pathname]);

  return null; // Since this is a scroll effect only, no need to render anything
}

export default ScrollToTop;
