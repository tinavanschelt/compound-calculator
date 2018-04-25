import React from 'react';
import { mount } from 'enzyme';

import LoadingIndicator from '../LoadingIndicator';
import LoadingDot from '../LoadingDot';

describe('<LoadingIndicator />', () => {
  const renderedComponent = mount(<LoadingIndicator />);

  it('should render 3 LoadingDots', () => {
    expect(renderedComponent.find(LoadingDot).length).toBe(3);
  });

  it('LoadingDots should have icons', () => {
    expect(renderedComponent.find('i').length).toBe(3);
  });
});
