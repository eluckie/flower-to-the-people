import React from "react";
import PropTypes from "prop-types";

function Flower(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenFlowerClicked(props.id)}>
        <h2>{props.color} {props.name}</h2>
        <h4>{props.origin}</h4>
        <p>
          ${props.price} per flower<br/>
          {props.quantity} in stock
        </p>
      </div>
    </React.Fragment>
  );
}

Flower.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenFlowerClicked: PropTypes.func
};

export default Flower;