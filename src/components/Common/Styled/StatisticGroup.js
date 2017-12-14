import Styled from 'styled-components';
import Statistic from 'semantic-ui-react/dist/commonjs/views/Statistic';

const SemanticStatisticGroup = Statistic.Group;

const StatisticGroup = Styled(SemanticStatisticGroup)`
    ${({ color = false }) => color && `.value { color: ${color} !important};`}
    ${({ color = false }) => color && `.label { color: ${color} !important};`}
`;

export default StatisticGroup;