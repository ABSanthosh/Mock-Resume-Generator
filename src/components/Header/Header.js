import React from "react";
import './Header.scss';

function Header() {
  return (
    <nav className="Header">
      <div className="Header--content">
        <p>Resumify</p>
        <button
          className="FancyButton"
          onClick={() => {
            alert("This feature is not available yet");
          } }
        >
          Login
        </button>
      </div>
    </nav>
  );
}


export default Header;
