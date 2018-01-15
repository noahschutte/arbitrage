import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ErrorContainer = ({ errorMessage }) => (
  <p className="error-container">{errorMessage}</p>
);

ErrorContainer.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = ({ orderBooks }) => ({ errorMessage: orderBooks.errorMessage });

export default connect(mapStateToProps)(ErrorContainer);
