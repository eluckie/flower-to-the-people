import React from "react";
import Spotlight from "./Spotlight";

class FlowerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUsVisible: false,
      shopVisible: false,
      spotlightVisible: true,
      newFlowerVisible: false
    };
  }

  render () {
    let currentlyVisibleState = <Spotlight/>

    return (
      <React.Fragment>
      <br/>
        <div className="center">
          <button id="nav-btns" onClick={this.handleAboutUsClick}>about us</button>
          <button id="nav-btns" onClick={this.handleShopClick}>shop</button>
          <button id="nav-btns" onClick={this.handleSpotlightlick}>spotlight</button>
          <button id="nav-btns" onClick={this.handleNewFlowerClick}>add flower</button>
        </div>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default FlowerControl;