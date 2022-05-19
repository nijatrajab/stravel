import { motion, useAnimation } from "framer-motion";
import classes from "./Blog.module.css";
import BlogButton from "./BlogButton";

const blogVariants = {
  hidden: { opacity: 0,x: 50 },
  visible: (i) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    };
  },
  exit: (i) => {
    return {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
      },
    };
  },
};

const Blog = ({ blogId, idx, blogState, title, image, desc }) => {
  const onClickHandler = () => {
    blogState(blogId);
  };

  return (
    <motion.div
      layout="position"
      variants={blogVariants}
      initial="hidden"
      exit="exit"
      animate="visible"
      custom={idx}
      className={classes["blog-holder"]}
    >
      <div className={classes["blog-image-holder"]}>
        <img src={image} alt={title} />
      </div>
      <div className={classes["blog-content"]}>
        <p className={classes["blog-title"]}>{title}</p>
        <p className={classes["blog-desc"]}>{desc}</p>
        <BlogButton className={classes["blog-more"]} btnType="next" blogState={onClickHandler} />
      </div>
    </motion.div>
  );
};

export default Blog;
