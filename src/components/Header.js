import React from "react";
import Icon from "./../img/flower-icon.png";

function Header() {
  return (
    <React.Fragment>
      <div className="center">
        <img src={Icon} alt="icon of cannabis in a pot"/>
        <hr/>
      </div>
    </React.Fragment>
  );
}

export default Header;