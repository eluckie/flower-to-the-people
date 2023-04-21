import React from "react";
import Spotlight from "./Spotlight";
import AboutUs from "./AboutUs";
import Shop from "./Shop";
import NewFlower from "./NewFlower";

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

  handleAboutUsClick = () => {
    this.setState({
      aboutUsVisible: true,
      shopVisible: false,
      spotlightVisible: false,
      newFlowerVisible: false
    });
  }

  handleSpotlightlick = () => {
    this.setState({
      aboutUsVisible: false,
      shopVisible: false,
      spotlightVisible: true,
      newFlowerVisible: false
    });
  }
  
  handleShopClick = () => {
    this.setState({
      aboutUsVisible: false,
      shopVisible: true,
      spotlightVisible: false,
      newFlowerVisible: false
    });
  }

  handleNewFlowerClick = () => {
    this.setState({
      aboutUsVisible: false,
      shopVisible: false,
      spotlightVisible: false,
      newFlowerVisible: true
    })
  }

  render () {
    let currentlyVisibleState = null;

    if(this.state.aboutUsVisible) {
      currentlyVisibleState = <AboutUs/>
    } else if (this.state.shopVisible) {
      currentlyVisibleState = <Shop/>
    } else if (this.state.newFlowerVisible) {
      currentlyVisibleState = <NewFlower/>
    } else {
      currentlyVisibleState = <Spotlight/>
    }

    return (
      <React.Fragment>
      <br/>
        <div className="center">
          <button id="nav-btns" onClick={this.handleAboutUsClick}>about us</button>
          <button id="nav-btns" onClick={this.handleShopClick}>shop</button>
          <button id="nav-btns" onClick={this.handleSpotlightlick}>spotlight</button>
          <button id="nav-btns" onClick={this.handleNewFlowerClick}>new flower</button>
        </div>
        <br/>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default FlowerControl;