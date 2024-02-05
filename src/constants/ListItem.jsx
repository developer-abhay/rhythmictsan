import React from "react";

const ListItem = ({ title, url }) => {
  return (
    <li>
      <a className="nav-item" href={url}>
        {title}
      </a>
    </li>
  );
};

export default ListItem;
