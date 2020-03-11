import React from "react";
import "./styles.scss";

const Header = props => {
  return (
    <header className="header" data-test="header">
      <div className="wrapr">
        <div className="logo" data-test="logo">
          Header
        </div>
      </div>
    </header>
  );
};

export default Header;
