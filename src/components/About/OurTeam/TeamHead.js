import { motion, useAnimation } from "framer-motion";
import classes from "./TeamHead.module.css";
import TextList from "./TextAnim";

const svgVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      pathLength: { bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

const descVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: { delay: 0.6 },
  },
};

const TeamHead = ({ children, ourTeam }) => {
  const animControl = useAnimation();
  return (
    <motion.div
      className={classes["team-head"]}
      whileInView={() => {
        animControl.start("visible");
      }}
      viewport={{margin: "-100px"}}
    >
      <TextList className={classes["team-title"]} animControl={animControl}>
        {ourTeam.title}
      </TextList>

      <motion.svg
        viewBox="0 0 600 20"
        initial="hidden"
        animate={animControl}
        className={classes["svg-line"]}
      >
        <motion.line
          x1="300"
          y1="10"
          x2="600"
          y2="10"
          stroke="var(--main-beige-black)"
          custom={1}
          variants={svgVariants}
        />
        <motion.line
          x1="300"
          y1="10"
          x2="0"
          y2="10"
          stroke="var(--main-beige-black)"
          custom={1}
          variants={svgVariants}
        />
      </motion.svg>
      <motion.div
        className={classes["team-desc-holder"]}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.p
          className={classes["team-desc"]}
          animate={animControl}
          style={{ display: "inline-block", willChange: "transform" }}
          initial="hidden"
          variants={descVariants}
        >
          {ourTeam.desc}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default TeamHead;
