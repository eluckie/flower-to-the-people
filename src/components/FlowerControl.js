import React from "react";
import Spotlight from "./Spotlight";
import AboutUs from "./AboutUs";
import Shop from "./Shop";
import NewFlowerForm from "./NewFlowerForm";
import FlowerDetail from "./FlowerDetail";
import EditFlowerForm from "./EditFlowerForm";
import BuyBtn from "./BuyBtn";
import StockBtn from "./StockBtn";
import LowStock from "./LowStock";
import OOS from "./OOS";

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

  handleBuyingFlower = () => {
    const flowerToBuy = this.state.selectedFlower;
    const newQty = flowerToBuy.quantity - 1;
    const updatedFlowerToBuy = {
      name: flowerToBuy.name,
      origin: flowerToBuy.origin,
      color: flowerToBuy.color,
      price: flowerToBuy.price,
      quantity: newQty,
      id: flowerToBuy.id
    }

    const newShopList = this.state.shopList
      .filter(flower => flower.id !== flowerToBuy.id)
      .concat(updatedFlowerToBuy);
    this.setState({
      shopList: newShopList,
      selectedFlower: null
    });
    this.setState({selectedFlower: updatedFlowerToBuy});
  }

  handleStockingFlower = () => {
    const flowerToStock = this.state.selectedFlower;
    const newQty = flowerToStock.quantity + 12;
    const updatedFlowerToStock = {
      name: flowerToStock.name,
      origin: flowerToStock.origin,
      color: flowerToStock.color,
      price: flowerToStock.price,
      quantity: newQty,
      id: flowerToStock.id
    }

    const newShopList = this.state.shopList
      .filter(flower => flower.id !== flowerToStock.id)
      .concat(updatedFlowerToStock);
    this.setState({
      shopList: newShopList,
      selectedFlower: null
    });
    this.setState({selectedFlower: updatedFlowerToStock});
  }

  render () {
    let currentlyVisibleState = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditFlowerForm
        flower={this.state.selectedFlower}
        onEditFlower={this.handleEditingFlower}/>
    } else if (this.state.selectedFlower != null && this.state.selectedFlower.quantity > 3) {
      currentlyVisibleState = 
        <React.Fragment>
          <FlowerDetail
            flower={this.state.selectedFlower}
            onClickingEdit={this.handleEditClick}
            onClickingDelete={this.handleDeletingFlower}/>
          <BuyBtn onClickingBuy={this.handleBuyingFlower}/>
          <StockBtn onClickingStock={this.handleStockingFlower}/>
        </React.Fragment>
    } else if (this.state.selectedFlower !== null && this.state.selectedFlower.quantity <= 3 && this.state.selectedFlower.quantity > 0) {
      currentlyVisibleState = 
        <React.Fragment>
          <LowStock/>
          <FlowerDetail
            flower={this.state.selectedFlower}
            onClickingEdit={this.handleEditClick}
            onClickingDelete={this.handleDeletingFlower}/>
          <BuyBtn onClickingBuy={this.handleBuyingFlower}/>
          <StockBtn onClickingStock={this.handleStockingFlower}/>
        </React.Fragment>
    } else if (this.state.selectedFlower != null && this.state.selectedFlower.quantity === 0) {
      currentlyVisibleState = 
      <React.Fragment>
        <OOS/>
        <FlowerDetail
          flower={this.state.selectedFlower}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingFlower}/>
          <StockBtn onClickingStock={this.handleStockingFlower}/>
      </React.Fragment>
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