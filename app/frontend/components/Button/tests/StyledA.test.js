/**
 * Tests for StyledA styled-component
 */

import React from 'react';
import { shallow } from 'enzyme';

import { StyledASolid, StyledAOutline, StyledATransparent } from '../StyledA';

describe('<StyledA />', () => {
  describe('<StyledASolid />', () => {
    it('should render a <A> tag', () => {
      const renderedComponent = shallow(<StyledASolid />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<StyledASolid />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<StyledASolid id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(<StyledASolid attribute={'test'} />);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  describe('<StyledAOutline />', () => {
    it('should render a <A> tag', () => {
      const renderedComponent = shallow(<StyledAOutline />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<StyledAOutline />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<StyledAOutline id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(<StyledAOutline attribute={'test'} />);
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });

  describe('<StyledATransparent />', () => {
    it('should render a <A> tag', () => {
      const renderedComponent = shallow(<StyledATransparent />);
      expect(renderedComponent.type()).toEqual('div');
    });

    it('should have a className attribute', () => {
      const renderedComponent = shallow(<StyledATransparent />);
      expect(renderedComponent.prop('className')).toBeDefined();
    });

    it('should adopt a valid attribute', () => {
      const id = 'test';
      const renderedComponent = shallow(<StyledATransparent id={id} />);
      expect(renderedComponent.prop('id')).toEqual(id);
    });

    it('should not adopt an invalid attribute', () => {
      const renderedComponent = shallow(
        <StyledATransparent attribute={'test'} />
      );
      expect(renderedComponent.prop('attribute')).toBeUndefined();
    });
  });
});
