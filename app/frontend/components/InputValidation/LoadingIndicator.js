/**
 * LoadingIndicator
 */

import React, { Fragment } from 'react';

import LoadingDot from './LoadingDot';

function LoadingIndicator() {
  return (
    <Fragment>
      <LoadingDot className="one">
        <i className="fa fa-circle" />
      </LoadingDot>
      <LoadingDot className="two">
        <i className="fa fa-circle" />
      </LoadingDot>
      <LoadingDot className="three">
        <i className="fa fa-circle" />
      </LoadingDot>
    </Fragment>
  );
}

export default LoadingIndicator;
