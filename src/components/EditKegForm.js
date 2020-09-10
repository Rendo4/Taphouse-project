import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  return (
    <React.Fragment>
      <ReusableForm
      buttonText="Update Keg" />
    </React.Fragment>
  );
}

function EditNewKeg(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alchol: event.target.alchol.valuel, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditKegFormSubmission}
      buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;