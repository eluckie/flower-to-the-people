import React from "react";
import PropTypes from "prop-types";

function StockBtn(props) {
  return (
    <React.Fragment>
      <div className="center">
        <br/>
        <button id="stock-btn" onClick={props.onClickingStock}></button>
      </div>
    </React.Fragment>
  );
}

StockBtn.propTypes = {
  onClickingStock: PropTypes.func
};

export default StockBtn;