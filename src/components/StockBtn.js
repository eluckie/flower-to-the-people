import React from "react";
import PropTypes from "prop-types";

function StockBtn(props) {
  return (
    <React.Fragment>
      <button onClick={props.onClickingStock}>put more flowers</button>
    </React.Fragment>
  );
}

StockBtn.propTypes = {
  onClickingStock: PropTypes.func
};

export default StockBtn;