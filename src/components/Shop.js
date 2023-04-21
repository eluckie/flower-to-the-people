import React from "react";
import Flower from "./Flower";
import PropTypes from "prop-types";

function Shop(props) {
  return (
    <React.Fragment>
      {props.flowerList.map((flower) =>
        <Flower
          name={flower.name}
          origin={flower.origin}
          color={flower.color}
          price={flower.price}
          quantity={flower.quantity}
          id={flower.id}
          key={flower.id}/>
      )}
    </React.Fragment>
  );
}

Shop.propTypes = {
  flowerList: PropTypes.array
};

export default Shop;