/**
 * ErrorMessage
 */

import React from 'react';
import PropTypes from 'prop-types';
import ErrorWrapper from './ErrorWrapper';

function ErrorMessage(props) {
  return <ErrorWrapper>{props.text}</ErrorWrapper>;
}

ErrorMessage.propTypes = {
  text: PropTypes.string
};

export default ErrorMessage;
