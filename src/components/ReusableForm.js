import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Flower Name"/>
        <br/><br/>
        <input
          type="text"
          name="origin"
          placeholder="Origin"/>
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
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;