import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div style={{float:"left"}}>
        <span>
          <a href="/" className="nav-item ">
            Home
          </a>
        </span>
        <span>
          <a href="/favourites" className="nav-item">
            Set favourites
          </a>
        </span>
      </div>
    </nav>
  );
};
export default Navbar;
