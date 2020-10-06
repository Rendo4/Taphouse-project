import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - {props.brand}</h3>
        <p>{props.price} {props.alchol} </p>
        <p>{props.quantity} </p>
        <p><em>{props.formattedWaitTime}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  alchol: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  formattedWaitTime: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;