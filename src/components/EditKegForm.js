import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditNewKeg(props){
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value,
       alchol: event.target.alchol.value, 
       id: keg.id
      });
    }
    return (
      <React.Fragment>
        <ReusableForm
          formSubmissionHandler={handleEditKegFormSubmission}
          buttonText="Update Keg" />
        </React.Fragment>
      );
  }

EditNewKeg.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditNewKeg;