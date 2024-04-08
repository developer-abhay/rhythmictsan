import BlogImg from "/assets/blog1.jpg";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogCard = () => {
  /* Keywords- Guitar Classes in South Extension, Guitar Learning, Guitar classes, Music school in   South Extension
Meta Desc-  Guitar, often hailed as one of the most versatile and beloved instruments, opens doors to endless possibilities in the realm of music. Whether you're a novice seeking to strum your first chord or an experienced player looking to refine your skills, Rhymicstan's guitar classes in South Extension cater to all levels of expertise.
*/
  return (
    <div className="blog-card">
      <Link className="blog-img" to="/blogDetail">
        <img src={BlogImg} alt="" />
      </Link>
      <div className="blog-details">
        <div className="blog-header">
          <p>08 April 2024</p>
          <span>4 min read</span>
        </div>
        <Link to="/blogDetail" className="blog-title">
          Guitar classes in South Extension
        </Link>
        <p className="blog-description">
          The music school in the south extension offers full-fledged music
          education from Classical to Western.
        </p>
        <h5>By Rhythmicstan</h5>
      </div>
    </div>
  );
};

export default BlogCard;
