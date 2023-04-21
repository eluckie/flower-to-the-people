import React from "react";
import PropTypes from "prop-types";

function BuyBtn(props) {
  return (
    <React.Fragment>
      <div className="center">
        <button id="yellow-btn" onClick={props.onClickingBuy}>take a flower</button>
      </div>
    </React.Fragment>
  );
}

BuyBtn.propTypes = {
  onClickingBuy: PropTypes.func
};

export default BuyBtn;