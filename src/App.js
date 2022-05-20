import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Layout from "./components/Navigation/Layout";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import useScrollToTop from "./hooks/use-scroll";
import useDisablePinchZoomEffect from "./hooks/use-pinchzoom";

function App() {
  useScrollToTop()
  useDisablePinchZoomEffect()

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Layout>
  );
}

export default App;
