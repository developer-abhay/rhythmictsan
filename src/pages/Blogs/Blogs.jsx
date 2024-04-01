import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  return (
    <main className="blog-page container">
      <h1>Blogs</h1>
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  );
};

export default Blogs;
