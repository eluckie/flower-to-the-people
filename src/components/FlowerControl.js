import React from "react";
import Spotlight from "./Spotlight";
import AboutUs from "./AboutUs";
import Shop from "./Shop";
import NewFlowerForm from "./NewFlowerForm";
import FlowerDetail from "./FlowerDetail";
import EditFlowerForm from "./EditFlowerForm";

class FlowerControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUsVisible: false,
      shopVisible: false,
      spotlightVisible: true,
      newFlowerVisible: false,
      shopList: [],
      selectedFlower: null,
      editing: false
    };
  }

  handleAboutUsClick = () => {
    this.setState({
      aboutUsVisible: true,
      shopVisible: false,
      spotlightVisible: false,
      newFlowerVisible: false,
      selectedFlower: null,
      editing: false
    });
  }

  handleSpotlightlick = () => {
    this.setState({
      aboutUsVisible: false,
      shopVisible: false,
      spotlightVisible: true,
      newFlowerVisible: false,
      selectedFlower: null,
      editing: false
    });
  }
  
  handleShopClick = () => {
    this.setState({
      aboutUsVisible: false,
      shopVisible: true,
      spotlightVisible: false,
      newFlowerVisible: false,
      selectedFlower: null,
      editing: false
    });
  }

  handleNewFlowerClick = () => {
    this.setState({
      aboutUsVisible: false,
      shopVisible: false,
      spotlightVisible: false,
      newFlowerVisible: true,
      selectedFlower: null,
      editing: false
    });
  }

  handleAddingNewFlower = (newFlower) => {
    const newShopList = this.state.shopList.concat(newFlower);
    this.setState({
      shopList: newShopList,
      newFlowerVisible: false,
      shopVisible: true
    });
  }

  handleChangingSelectedFlower = (id) => {
    const selectedFlower = this.state.shopList.filter(flower => flower.id === id)[0];
    this.setState({selectedFlower: selectedFlower});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingFlower = (flowerToEdit) => {
    const editedShopList = this.state.shopList
      .filter(flower => flower.id !== this.state.selectedFlower.id)
      .concat(flowerToEdit);
    this.setState({
      shopList: editedShopList,
      editing: false,
      selectedFlower: null
    });
  }

  handleDeletingFlower = (id) => {
    const newShopList = this.state.shopList.filter(flower => flower.id !== id);
    this.setState({
      shopList: newShopList,
      selectedFlower: null
    });
  }

  render () {
    let currentlyVisibleState = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditFlowerForm
        flower={this.state.selectedFlower}
        onEditFlower={this.handleEditingFlower}/>
    } else if (this.state.selectedFlower != null) {
      currentlyVisibleState = <FlowerDetail
        flower={this.state.selectedFlower}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingFlower}/>
    } else if(this.state.aboutUsVisible) {
      currentlyVisibleState = <AboutUs/>
    } else if (this.state.shopVisible) {
      currentlyVisibleState = <Shop
        flowerList={this.state.shopList}
        onFlowerSelection={this.handleChangingSelectedFlower}/>
    } else if (this.state.newFlowerVisible) {
      currentlyVisibleState = <NewFlowerForm
        onNewFlowerCreation={this.handleAddingNewFlower}/>
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