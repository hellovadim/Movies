import React from "react";

function Header() {
  return (
    <nav className="teal darken-3">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
