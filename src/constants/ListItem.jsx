import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ title, url }) => {
  return (
    <li>
      <Link className="nav-item" to={url}>
        {title}
      </Link>
    </li>
  );
};

export default ListItem;
