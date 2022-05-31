import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Layout from "./components/Navigation/Layout";
import ThemeProvider from "./store/theme/ThemeProvider";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScrollToTop from "./hooks/use-scroll";
import useDisablePinchZoomEffect from "./hooks/use-pinchzoom";
import { AnimatePresence } from "framer-motion";

function App() {
  useScrollToTop();
  useDisablePinchZoomEffect();
  const location = useLocation()

  return (
    <ThemeProvider>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/tours" element={<Tours />} />
              <Route path="*" element={<Landing />} />
            </Routes>
          </AnimatePresence>
        </Layout>
    </ThemeProvider>
  );
}

export default App;
