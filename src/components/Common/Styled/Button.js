import React from "react";
import Styled from "styled-components";
import SemanticButton from "semantic-ui-react/dist/commonjs/elements/Button";
import { MOBILE_SCREEN } from '../../../common/settings';

export const Button = Styled(({backgroundColor, color, display, margin, top, mobileMargin, mobileTop, mobileDisplay, mobileBackgroundColor, ...rest}) =>
    <SemanticButton {...rest} />
)`
  ${({ backgroundColor = false }) =>
    backgroundColor && `background-color: ${backgroundColor} !important;`}
  ${({ color = false }) => color && `color: ${color} !important;`}
  ${({display = false}) => display && `display: ${display} !important;`}
  ${({margin = false}) => margin && `margin: ${margin} !important;`}
  ${({top = false}) => top && `top: ${top} !important;`}
  
  @media ${MOBILE_SCREEN} {
    ${({ mobileMargin = false }) => mobileMargin && `margin: ${mobileMargin} !important;`}
    ${({ mobileTop = false }) => mobileTop && `top: ${mobileTop} !important;`}
    ${({ mobileDisplay = false }) => mobileDisplay && `display: ${mobileDisplay} !important;`}
    ${({ mobileBackgroundColor = false }) => mobileBackgroundColor && `background-color: ${mobileBackgroundColor} !important;`}
  }
`;

export default Button;
