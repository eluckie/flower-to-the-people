import React from "react";
import PropTypes from "prop-types";

function FlowerDetail(props) {

  const { flower } = props;

  return (
    <React.Fragment>
      <h2>{flower.color} {flower.name}</h2>
      <h4>{flower.origin}</h4>
      <p>
        ${flower.price} per flower<br/>
        {flower.quantity} in stock
      </p>
      <br/>
      <button>buy</button>
      <button>restock</button>
      <br/><br/>
      <button>update {flower.name}</button>
      <button>kill {flower.name}</button>
    </React.Fragment>
  );
}

FlowerDetail.propTypes = {
  flower: PropTypes.object
};

export default FlowerDetail;