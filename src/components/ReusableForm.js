import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="center">
        <div id="forms">
          <form onSubmit={props.formSubmissionHandler}>
            <input
              type="text"
              name="name"
              placeholder="Flower Name"/>
            <br/><br/>
            <input
              type="text"
              name="origin"
              placeholder="Place of Origin"/>
            <br/><br/>
            <input
              type="text"
              name="color"
              placeholder="Color"/>
            <br/><br/>
            <input
              type="number"
              name="price"
              placeholder="Price per Flower"/>
            <br/><br/>
            <button id="green-btn" type="submit">{props.buttonText}</button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;