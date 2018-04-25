/**
 * Tests for App Container
 */

import React from 'react';
import { mount } from 'enzyme';

import Input from '../index';
import StyledInput from '../StyledInput';

describe('<Input />', () => {
  const renderedComponent = mount(<Input type="text" />);

  it('should render StyledInput', () => {
    expect(renderedComponent.find(StyledInput).length).toEqual(1);
  });
});
