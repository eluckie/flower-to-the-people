import React from "react";
import PropTypes from "prop-types";

function FlowerDetail(props) {

  const { flower, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="center">
        <h2>{flower.color} {flower.name}</h2>
        <h4>{flower.origin}</h4>
        <p>
          ${flower.price} per flower<br/>
          {flower.quantity} in stock
        </p>
        <br/>
        <p>
          <span id="padding" onClick={props.onClickingEdit}>update {flower.name}</span>
          <span id="padding" onClick={() => onClickingDelete(flower.id)}>kill {flower.name}</span>
        </p>
        <hr/>
        <br/>
      </div>
    </React.Fragment>
  );
}

FlowerDetail.propTypes = {
  flower: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default FlowerDetail;