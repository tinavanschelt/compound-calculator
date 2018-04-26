/**
 * Wrapper (styled-component)
 */

import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  margin: ${props => props.margin && props.margin};
  width: ${props => (props.fill === 'true' ? '100%' : 'auto')};
`;

export default Wrapper;
