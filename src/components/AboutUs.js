import React from "react";
import Icon from "./../img/flower-icon.png";

function AboutUs() {
  return (
    <React.Fragment>
      <div className="center">
        <h1 id="yellow-accent">flower to the people</h1>
        <p id="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br/><br/>
        <div id="details">
          <h2 id="purple-accent">hours</h2>
          <h3>
            mon-sun<br/>
            8a-8p
          </h3>
          <h4>
            888 flower ln<br/>
            flower city, flower state<br/>
            888-888-8888
          </h4>
        </div>
        <br/><br/>
        <img id="icon-border" src={Icon} alt="site icon"/>
        <img id="icon-border" src={Icon} alt="site icon"/>
        <img id="icon-border" src={Icon} alt="site icon"/>
        <img id="icon-border" src={Icon} alt="site icon"/>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;