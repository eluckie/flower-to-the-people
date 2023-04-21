import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditFlowerForm(props) {
  const { flower } = props;

  function handleEditFlowerFormSubmission(event) {
    event.preventDefault();
    props.onEditFlower({
      name: event.target.name.value,
      color: event.target.color.value,
      origin: event.target.origin.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(flower.quantity),
      id: flower.id
    });
  }

  return (
    <React.Fragment>
      <h3>completely fill {flower.name}'s updated details</h3>
      <ReusableForm
        formSubmissionHandler={handleEditFlowerFormSubmission}
        buttonText="update!"/>
    </React.Fragment>
  );
}

EditFlowerForm.propTypes = {
  flower: PropTypes.object,
  onEditFlower: PropTypes.func
};

export default EditFlowerForm;