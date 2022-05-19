import { motion, useMotionValue, useTransform } from "framer-motion";
import classes from "./HeadCard.module.css";

const HeadCard = ({ children, headClass, gridIdx, xState, yState }) => {
  const x = useMotionValue(160*yState);
  const y = useMotionValue(160*xState);

  const rotateX = useTransform(y, [0*xState, 320*xState], [20, -20]);
  const rotateY = useTransform(x, [0*yState, 320*yState], [-20, 20]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    
  }

  function handleMouseLeave() {
    x.set(160*yState);
    y.set(160*xState);
  }

  const gridClass = `content-grid-${gridIdx}`;
  return (
    <motion.div
      className={`${classes["content-grid"]} ${classes[gridClass]} ${
        headClass ? headClass : ""
      }`}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        display: "flex",
        perspective: 90, 
        placeItems: "center",
        placeContent: "center",
        transition: "all",
        transitionDuration: "100ms",
        // transitionDelay: "100ms"
      }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >{children}</motion.div>
  );
};

export default HeadCard;
