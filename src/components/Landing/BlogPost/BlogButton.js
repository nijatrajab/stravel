import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";

const btnVariants = {
  hidden: {
    scale: 1,
    color: ["rgb(var(--main-font-color))"],
  },
  hover: (i) => {
    return {
      scale: [
        1.2,
        1,
        1.2
      ],
      cursor: "pointer",
      transition: {
        delay: i[0] * 0.1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: i[1] ? "reverse" : "loop",
      },
    };
  },
  tap: (i) => {
    return {
      scale: 1.2,
      transition: {
        delay: i[0] * 0.1,
      },
    };
  },
};

const BlogButton = ({ children, className, blogState, btnType }) => {
  return (
    <motion.span
      className={className}
      whileHover="hover"
      whileTap="tap"
      initial="hidden"
      onClick={() => btnType !== "next" ? blogState(null) : blogState()}
    >
      {[...Array(3)].map((numIdx, idx) =>
        btnType !== "next" ? (
          <NavigateBeforeIcon
            key={`blog-back-btn-${idx}`}
            variants={btnVariants}
            component={motion.svg}
            custom={[idx, btnType === "next"]}
          />
        ) : (
          <NavigateNextIcon
            key={`blog-next-btn-${idx}`}
            variants={btnVariants}
            component={motion.svg}
            custom={[idx, btnType === "next"]}
          />
        )
      )}
    </motion.span>
  );
};


export default BlogButton