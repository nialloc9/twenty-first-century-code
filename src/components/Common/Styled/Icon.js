import Styled from "styled-components";
import SemanticIcon from "semantic-ui-react/dist/commonjs/elements/Icon";

export const Icon = Styled(SemanticIcon)`
    ${({ margin = false }) => margin && `margin: ${margin} !important;`}
    ${({ color = false }) => color && `color: ${color};`}
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
`;

export default Icon;
