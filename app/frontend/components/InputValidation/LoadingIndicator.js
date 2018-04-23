/**
 * LoadingIndicator
 */

import React from 'react';

import LoadingDot from './LoadingDot';
import Wrapper from './Wrapper';

function LoadingIndicator() {
  return (
    <Wrapper>
      <LoadingDot className="one">
        <i className="fa fa-circle" />
      </LoadingDot>
      <LoadingDot className="two">
        <i className="fa fa-circle" />
      </LoadingDot>
      <LoadingDot className="three">
        <i className="fa fa-circle" />
      </LoadingDot>
    </Wrapper>
  );
}

export default LoadingIndicator;
