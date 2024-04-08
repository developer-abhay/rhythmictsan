import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import Banner from "../../components/Banner/Banner";

const Blogs = () => {
  return (
    <main className="blog-page">
      <Banner title="blogs" />
      <section className="container">
        <h5>Get quick reads on</h5>
        <h2>Our Blogs</h2>
        <div className="blog-card-container">
          <BlogCard />
        </div>
      </section>
    </main>
  );
};

export default Blogs;
