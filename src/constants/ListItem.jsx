import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ title }) => {
  return (
    <li className="nav-item">
      <Link to={`${title == "home" ? "/" : "/" + title}`}>{title}</Link>
    </li>
  );
};

export default ListItem;
