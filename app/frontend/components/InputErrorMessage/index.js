/**
 * InputErrorMessage
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

function InputErrorMessage(props) {
  return <Wrapper>{props.text}</Wrapper>;
}

InputErrorMessage.propTypes = {
  text: PropTypes.string
};

export default InputErrorMessage;
