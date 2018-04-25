/**
 * Tests for StyledButton styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';
import theme from '../../../theme';

import { ButtonSolid, ButtonOutline, ButtonTransparent } from '../StyledButton';

describe('<StyledButton />', () => {
  describe('<ButtonSolid />', () => {
    const renderComponent = (props = {}) =>
      shallow(<ButtonSolid theme={theme} {...props} />);

    it('should render a <button> tag', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.type()).toEqual('button');
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

  describe('<ButtonOutline />', () => {
    const renderComponent = (props = {}) =>
      shallow(<ButtonOutline theme={theme} {...props} />);

    it('should render a <button> tag', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.type()).toEqual('button');
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

  describe('<ButtonTransparent />', () => {
    const renderComponent = (props = {}) =>
      shallow(<ButtonTransparent theme={theme} {...props} />);

    it('should render a <button> tag', () => {
      const renderedComponent = renderComponent();
      expect(renderedComponent.type()).toEqual('button');
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
