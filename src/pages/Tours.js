import { default as TourList } from "../components/Tours/Tours";
import TourProvider from "../store/TourProvider";
import AnimatedPage from "./AnimatedPage";

const Tours = () => {
  return (
    <AnimatedPage>
      <TourProvider>
        <TourList />
      </TourProvider>
    </AnimatedPage>
  );
};

export default Tours;
