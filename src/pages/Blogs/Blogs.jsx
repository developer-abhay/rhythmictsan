import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blogs = () => {
  return (
    <main className="blog-page container">
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </main>
  );
};

export default Blogs;
