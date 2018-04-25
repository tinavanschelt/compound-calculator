/**
 *  Icon
 */

import styled from 'styled-components';

export const Icon = styled.i`
  color: ${props => props.theme.colorGray.light};
  font-size: 22px;
`;

export const IconGreen = Icon.extend`
  color: ${props => props.theme.colorGreen.light};
`;

export const IconRed = Icon.extend`
  color: ${props => props.theme.colorSalmon};
`;
