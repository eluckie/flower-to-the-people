import React from "react";
import Spot1Img from "./../img/spotlight1.png";
import Spot2Img from "./../img/spotlight2.png";
import Spot3Img from "./../img/spotlight3.png";
import Icon from "./../img/flower-icon.png";

function Spotlight() {
  return (
    <React.Fragment>
      <div id="spotlight-wrapper">
        <div id="spotlight">
          <img src={Spot1Img} alt="bud icon smiling showing peace signs"/>
          <h2 id="purple-accent">harry hybrid</h2>
          <p><em>from</em> happy valley</p>
          <p><strong>$4</strong>  per flower</p>
          <img id="small-icon" src={Icon} alt="site icon"/>
        </div>
        <div id="spotlight">
          <img src={Spot2Img} alt="bud icon in om pose"/>
          <h2 id="purple-accent">isaiah indi</h2>
          <p><em>from</em> in your dreams</p>
          <p><strong>$2 per flower</strong></p>
          <img id="small-icon" src={Icon} alt="site icon"/>
        </div>
        <div id="spotlight">
          <img src={Spot3Img} alt="bud icon flexing arm muscles"/>
          <h2 id="purple-accent">sally sativa</h2>
          <p><em>from</em> strong-arm central</p>
          <p><strong>$0 per flower</strong></p>
          <img id="small-icon" src={Icon} alt="site icon"/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Spotlight;