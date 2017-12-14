import React from 'react';
import Styled from "styled-components";
import SemanticImage from "semantic-ui-react/dist/commonjs/elements/Image";
import { MOBILE_SCREEN } from '../../../common/settings';

const Image = Styled(({ cursor, display, height, width, maxWidth, mobileWidth, ...rest }) =>
    <SemanticImage {...rest} />
)`
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
    ${({ display = false }) => display && `display: ${display};`}
    ${({ height = false }) => height && `height: ${height};`}
    ${({ maxWidth = false }) => maxWidth && `max-width: ${maxWidth};`}
    ${({ margin = false }) => margin && `margin: ${margin};`}
    
    @media ${MOBILE_SCREEN} {
        ${({ mobileWidth = false }) => mobileWidth && `width: ${mobileWidth};`}
    }
`;


export default Image;