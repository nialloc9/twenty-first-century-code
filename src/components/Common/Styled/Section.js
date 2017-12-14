import Styled from "styled-components";

const Section = Styled("section")`
    ${({ margin = false }) => margin && `margin: ${margin};`}
    ${({ height = false }) => height && `height: ${height};`}
`;

export default Section;