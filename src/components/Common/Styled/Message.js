import Styled from "styled-components";
import SemanticMessage from "semantic-ui-react/dist/commonjs/collections/Message";

const Message = Styled(SemanticMessage)`
    ${({ width = false }) => width && `width: ${width};`}
    ${({ margin = false }) => margin && `margin: ${margin};`}
    ${({ textAlign = false }) => textAlign && `text-align: ${textAlign};`}
`;

export default Message;
