import BlogImg from "/assets/blogPost.png";
import "./BlogCard.css";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <img src={BlogImg} alt="" />
      </div>
      <div className="blog-details">
        <div className="blog-header">
          <p>03 April 2024</p>
          <span>4 min read</span>
        </div>
        <h4 className="blog-title">
          3 Ways to Drive Employee Resiliency Through Performance Programs
        </h4>
        <p className="blog-description">
          Tips and tricks to drive employee resiliency through strategic
          performance programs
        </p>
        <h5>By Rhythmicstan</h5>
      </div>
    </div>
  );
};

export default BlogCard;
