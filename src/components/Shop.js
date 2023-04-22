import React from "react";
import Flower from "./Flower";
import PropTypes from "prop-types";

function Shop(props) {
  return (
    <React.Fragment>
      <div id="shop-wrapper">
        {props.flowerList.map((flower) =>
          <div id="shop-list" key={flower.id}>
            <Flower
              whenFlowerClicked={props.onFlowerSelection}
              name={flower.name}
              origin={flower.origin}
              color={flower.color}
              price={flower.price}
              quantity={flower.quantity}
              id={flower.id}/>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

Shop.propTypes = {
  flowerList: PropTypes.array
};

export default Shop;