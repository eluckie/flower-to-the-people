import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

function NewFlowerForm(props) {

  function handleNewFlowerFormSubmission(event) {
    event.preventDefault();
    props.onNewFlowerCreation({
      name: event.target.name.value,
      color: event.target.color.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      quantity: 12,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewFlowerFormSubmission}
        buttonText="let's grow"/>
    </React.Fragment>
  );
}

NewFlowerForm.propTypes = {
  onNewFlowerCreation: PropTypes.func
};

export default NewFlowerForm;