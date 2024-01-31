import React from "react";
import { NavLink } from "react-router-dom";

const ListItem = ({ title }) => {
  return (
    <li>
      <NavLink
        className="nav-item"
        to={`${title == "home" ? "/" : "/" + title}`}
      >
        {title}
      </NavLink>
    </li>
  );
};

export default ListItem;
