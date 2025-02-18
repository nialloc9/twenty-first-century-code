import React from 'react';
import Styled from "styled-components";
import SemanticImage from "semantic-ui-react/dist/commonjs/elements/Image";
import { MOBILE_SCREEN, TABLET_HORIZONTAL_SCREEN } from '../../../common/settings';

const Image = Styled(({ cursor, display, height, width, maxWidth, mobileWidth, ...rest }) =>
    <SemanticImage {...rest} />
)`
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
    ${({ display = false }) => display && `display: ${display};`}
    ${({ height = false }) => height && `height: ${height};`}
    ${({ width = false }) => width && `width: ${width};`}
    ${({ maxWidth = false }) => maxWidth && `max-width: ${maxWidth};`}
    ${({ margin = false }) => margin && `margin: ${margin};`}
    ${({ objectFit = false }) => objectFit && `object-fit: ${objectFit};`}
    
    @media ${TABLET_HORIZONTAL_SCREEN} {
        ${({ tabletHorizontalMargin = false }) => tabletHorizontalMargin && `margin: ${tabletHorizontalMargin};`}
    }
    
    @media ${MOBILE_SCREEN} {
        ${({ mobileWidth = false }) => mobileWidth && `width: ${mobileWidth};`}
    }

    &:hover {
        ${({ hoverTransition = false}) => hoverTransition && `transition: ${hoverTransition};`}
        ${({ hoverTransition = false}) => hoverTransition && `-webkit-transition: ${hoverTransition};`}
        ${({ hoverTransform = false }) => hoverTransform && `-ms-transform: ${hoverTransform};`}
        ${({ hoverTransform = false }) => hoverTransform && `-webkit-transform: ${hoverTransform};`}
        ${({ hoverTransform = false }) => hoverTransform && `transform: ${hoverTransform};`}
        ${({ hoverOpacity = false }) => hoverOpacity && `opacity: ${hoverOpacity};`}
    }
`;

export default Image;