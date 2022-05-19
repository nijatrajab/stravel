const BlogWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;


export default BlogWrapper