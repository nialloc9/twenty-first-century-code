import Styled from "styled-components";

const Link = Styled("a")`
    ${({ color = false }) => color && `color: ${color};`}
    ${({ cursor = false }) => cursor && `cursor: ${cursor};`}
`;

export default Link;
