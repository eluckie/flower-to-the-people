import React from "react";
import PropTypes from "prop-types";

function FlowerDetail(props) {

  const { flower, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>{flower.color} {flower.name}</h2>
      <h4>{flower.origin}</h4>
      <p>
        ${flower.price} per flower<br/>
        {flower.quantity} in stock
      </p>
      <br/>
      <button onClick={props.onClickingBuy}>take a flower</button>
      <button onClick={props.onClickingStock}>put more flowers</button>
      <br/><br/>
      <button onClick={props.onClickingEdit}>update {flower.name}</button>
      <button onClick={() => onClickingDelete(flower.id)}>kill {flower.name}</button>
    </React.Fragment>
  );
}

FlowerDetail.propTypes = {
  flower: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingStock: PropTypes.func
};

export default FlowerDetail;