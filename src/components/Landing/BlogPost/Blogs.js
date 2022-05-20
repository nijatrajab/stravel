import Blog from "./Blog";
import { Blogs as BlogPost } from "../../../store/constant-images";
import backpack from "../../../assets/images/tips/backpack.webp";

import classes from "./Blogs.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import BlogDetail from "./BlogDetail";
import { useMediaQuery } from "@mui/material";

const Blogs = () => {
  const [blogPost, setBlogPost] = useState(null);
  const notDesktopDevice = useMediaQuery(
    "(min-width:0px) and (max-width:1200px)"
  );

  const filterBlog = useCallback((blogId) => {
    const updatedBlogs = BlogPost.find((blog) => {
      return +blog._id === +blogId;
    });
    setBlogPost(updatedBlogs);
  }, []);

  return (
    <div className={classes["content-blog"]}>
      <div className={classes["content-blog-head"]}>
        <p className={classes["content-blog-title"]}>
          Read before you travel with us
        </p>
        <p className={classes["content-blog-tag"]}>#stravel</p>
        {!notDesktopDevice && (
          <div className={classes["content-blog-img"]}>
            <img src={backpack} alt="content-blog" />
          </div>
        )}
      </div>

      <motion.div
        layout
        key="blog-main"
        className={classes["content-blog-main"]}
      >
        <AnimatePresence exitBeforeEnter>
          {!blogPost ? (
            <>
              {BlogPost.map((blog, idx) => (
                <Blog
                  key={`blog-${blog._id}`}
                  idx={idx}
                  title={blog.title}
                  image={blog.image}
                  desc={blog.desc}
                  blogState={filterBlog}
                  blogId={blog._id}
                />
              ))}
            </>
          ) : (
            <BlogDetail blogState={setBlogPost} blogPost={blogPost} />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Blogs;
