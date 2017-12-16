import React from 'react';
import Styled from "styled-components";
import SemanticIcon from "semantic-ui-react/dist/commonjs/elements/Icon";

export const Icon = Styled(({ margin, color, cursor, hoverTransition, hoverTransform, ...rest }) => <SemanticIcon { ...rest } />)`
    ${({ margin = false }) => margin && `margin: ${margin} !important;`}
    ${({ color = false }) => color && `color: ${color};`}
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
    
    &:hover {
        ${({ hoverTransition = false}) => hoverTransition && `transition: ${hoverTransition};`}
        ${({ hoverTransition = false}) => hoverTransition && `-webkit-transition: ${hoverTransition};`}
        ${({ hoverTransform = false }) => hoverTransform && `-ms-transform: ${hoverTransform};`}
        ${({ hoverTransform = false }) => hoverTransform && `-webkit-transform: ${hoverTransform};`}
        ${({ hoverTransform = false }) => hoverTransform && `transform: ${hoverTransform};`}
    }
`;

export default Icon;
