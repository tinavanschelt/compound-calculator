/**
 * Tests for App Container
 */

import React from 'react';
import { shallow } from 'enzyme';

import { App } from '../index';
import Calculator from '../../Calculator';
import Graph from '../../Graph';

describe('<App />', () => {
  const renderedComponent = shallow(<App />);

  it('should render the calculator container', () => {
    expect(renderedComponent.contains(<Calculator />)).toEqual(true);
  });

  it('should render the graph container', () => {
    const data = [
      { month: 0, totalAmount: 100 },
      { month: 1, totalAmount: 110 },
      { month: 2, totalAmount: 120 }
    ];

    expect(renderedComponent.contains(<Graph data={data} />)).toEqual(true);
  });
});
