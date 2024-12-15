import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <i className="fas fa-home"></i> <span>Home</span>
          </li>
          <li>
            <i className="fas fa-hashtag"></i> <span>Explore</span>
          </li>
          <li>
            <i className="fas fa-bell"></i> <span>Notifications</span>
          </li>
          <li>
            <i className="fas fa-envelope"></i> <span>Messages</span>
          </li>
          <li>
            <i className="fas fa-bookmark"></i> <span>Bookmarks</span>
          </li>
          <li>
            <i className="fas fa-list"></i> <span>Lists</span>
          </li>
          <li>
            <i className="fas fa-user"></i> <span>Profile</span>
          </li>
          <li>
            <i className="fas fa-ellipsis-h"></i> <span>More</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
