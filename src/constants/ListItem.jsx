import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ title, url }) => {
  const scrollTo = () => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
  };

  return (
    <li>
      <Link className="nav-item" to={url} onClick={scrollTo}>
        {title}
      </Link>
    </li>
  );
};

export default ListItem;
