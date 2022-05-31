import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useState, useRef, useLayoutEffect } from "react";

const Parallax = ({ children, offset = 100, className }) => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useViewportScroll();
  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 100, damping: 90 });

  useLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY ||
          window.pageYOffset
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);
  if (prefersReducedMotion) {
    return <>{children}</>;
  }
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default Parallax;
