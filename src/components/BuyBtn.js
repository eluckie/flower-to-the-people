import React from "react";
import PropTypes from "prop-types";

function BuyBtn(props) {
  return (
    <React.Fragment>
      <button onClick={props.onClickingBuy}>take a flower</button>
    </React.Fragment>
  );
}

BuyBtn.propTypes = {
  onClickingBuy: PropTypes.func
};

export default BuyBtn;