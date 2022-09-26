import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="container">
      <Link className="content" to="/">
       <h2> Poll Application</h2>
      </Link>
      <nav className="nav">
        <Link className="content" to="/createquestion">
          + Create Question
        </Link>
      </nav>
    </header>
  );
};

export default Header;
