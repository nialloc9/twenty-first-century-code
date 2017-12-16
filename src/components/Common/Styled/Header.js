import React from 'react';
import Styled from 'styled-components';
import SemanticHeader from 'semantic-ui-react/dist/commonjs/elements/Header'

const Header = Styled(({ color, margin, ...rest }) => <SemanticHeader {...rest} />)`
    ${({color = false}) => color && `color: ${color} !important;`}
    ${({margin = false}) => margin && `margin: ${margin} !important;`}
`;

export default Header;