import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Layout from "./components/Navigation/Layout";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

function App() {
  
  // useEffect(() => {
  //   const docWidth = document.documentElement.offsetWidth;
  //   [].forEach.call(
  //     document.querySelectorAll('*'),
  //     function(el) {
  //       if (el.offsetWidth > docWidth) {
  //         console.log(el, "this is this");
  //       }
  //     }
  //   );
  // }, [])


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </Layout>
  );
}

export default App;
