/**
 * Tests for StyledButton styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import { ButtonSolid, ButtonOutline, ButtonTransparent } from '../StyledButton';

describe('<StyledButton />', () => {
  describe('<ButtonSolid />', () => {
    it('should render a <button> tag', () => {
      const renderedComponent = shallow(<ButtonSolid />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<ButtonSolid />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<ButtonSolid id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(<ButtonSolid attribute={'test'} />);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  describe('<ButtonOutline />', () => {
    it('should render a <button> tag', () => {
      const renderedComponent = shallow(<ButtonOutline />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<ButtonOutline />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<ButtonOutline id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(<ButtonOutline attribute={'test'} />);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  describe('<ButtonTransparent />', () => {
    it('should render a <button> tag', () => {
      const renderedComponent = shallow(<ButtonTransparent />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<ButtonTransparent />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<ButtonTransparent id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(
        <ButtonTransparent attribute={'test'} />
      );
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });
});
