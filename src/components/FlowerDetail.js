import React from "react";
import PropTypes from "prop-types";

function FlowerDetail(props) {

  const { flower, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className="center">
        <h2 id="purple-accent">{flower.color} {flower.name}</h2>
        <h4><em>originating from {flower.origin}</em></h4>
        <p>
          ${flower.price} per flower<br/>
          <span id="yellow-accent"><strong>{flower.quantity}</strong></span> in stock
        </p>
        <br/>
        <p>
          <span id="edit-update-links"><span id="padding" onClick={props.onClickingEdit}>update {flower.name}</span></span>
          <span id="edit-update-links"><span id="padding" onClick={() => onClickingDelete(flower.id)}>kill {flower.name}</span></span>
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