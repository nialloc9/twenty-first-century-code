import Styled from "styled-components";
import SemanticInput from "semantic-ui-react/dist/commonjs/elements/Input";
import { MOBILE_SCREEN, TABLET_HORIZONTAL_SCREEN } from '../../../common/settings';

const Input = Styled(SemanticInput)`
    ${({ width = false }) => width && `width: ${width};`}
    ${({ maxWidth = false }) => maxWidth && `max-width: ${maxWidth};`}
    
    @media ${TABLET_HORIZONTAL_SCREEN} {
        ${({ tabletHorizontalMaxWidth = false }) => tabletHorizontalMaxWidth && `max-width: ${tabletHorizontalMaxWidth};`}
    }
    
    @media ${MOBILE_SCREEN} {
        ${({ mobileMaxWidth = false }) => mobileMaxWidth && `max-width: ${mobileMaxWidth};`}
    }
`;

export default Input;
