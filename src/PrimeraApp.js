import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PrimeraApp = ({ saludo }) => {
  return (
    <Fragment>
      <h1>{saludo}</h1>
      <p>Mi primera aplicación React</p>
    </Fragment>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
};

export default PrimeraApp;
