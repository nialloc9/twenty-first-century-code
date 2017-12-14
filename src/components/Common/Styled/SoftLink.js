import Styled from "styled-components";
import { Link } from "react-router-dom";

const SoftLink = Styled(Link)`
    ${({ color = false }) => color && `color: ${color};`}
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
`;

export default SoftLink;
