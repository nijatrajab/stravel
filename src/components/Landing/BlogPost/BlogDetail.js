import { motion } from "framer-motion";

import classes from "./BlogDetail.module.css";
import BlogButton from "./BlogButton";

const blogDetailVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
  },
};

const BlogDetail = ({ children, blogPost, blogState }) => {
  return (
    <motion.div
      initial="hidden"
      exit="exit"
      animate="visible"
      variants={blogDetailVariants}
      className={classes["blog-holder"]}
    >
      <div className={classes["blog-image-holder"]}>
        <img src={blogPost.image} alt={blogPost.title} />
      </div>
      <div className={classes["blog-content"]}>
        <p className={classes["blog-title"]}>{blogPost.title}</p>
        <p className={classes["blog-desc"]}>{blogPost.content}</p>
        <BlogButton
          className={classes["blog-more"]}
          blogState={blogState}
          btnType={"back"}
        />
      </div>
    </motion.div>
  );
};

export default BlogDetail;
