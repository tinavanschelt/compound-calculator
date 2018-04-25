/**
 * Tests for StyledA styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../../theme';

import { StyledASolid, StyledAOutline, StyledATransparent } from '../StyledA';

describe('<StyledA />', () => {
  describe('<StyledASolid />', () => {
    const renderComponent = (props = {}) =>
      shallow(<StyledASolid theme={theme} {...props} />);

    it('should render a <A> tag', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.type()).toEqual('a');
    });

    it('should have a className attribute', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = renderComponent({ id });
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = renderComponent({ attribute: 'test' });
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  describe('<StyledAOutline />', () => {
    const renderComponent = (props = {}) =>
      shallow(<StyledAOutline theme={theme} {...props} />);

    it('should render a <A> tag', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.type()).toEqual('a');
    });

    it('should have a className attribute', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = renderComponent({ id });
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = renderComponent({ attribute: 'test' });
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  describe('<StyledATransparent />', () => {
    const renderComponent = (props = {}) =>
      shallow(<StyledATransparent theme={theme} {...props} />);

    it('should render a <A> tag', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.type()).toEqual('a');
    });

    it('should have a className attribute', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = renderComponent({ id });
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = renderComponent({ attribute: 'test' });
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });
});
