import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import ProjectHeader from '../../components/Common/ProjectHeader';
import Overview from './Overview';
import ReduxPush from './ReduxPush';
import ListMaker from './ListMaker';
import ShouldIInvest from './ShouldIInvest';
import BlockChain from './BlockChain';
import Generators from './Generators';
import AsyncAwait from './AsyncAwait';
import Currying from './Currying';
import HigherOrderFunctions from './HigherOrderFunctions';
import ReduxSagas from './ReduxSagas';
import withSidebar from '../../hoc/withSidebar';
import withScroller from '../../hoc/withScroller';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_HOME } from '../../constants/sidebar';
import {
    JAVASCRIPT_OVERVIEW,
    JAVASCRIPT_SHOULD_I_INVEST,
    JAVASCRIPT_LIST_MAKER,
    JAVASCRIPT_REDUX_PUSH,
    JAVASCRIPT_BLOCK_CHAIN,
    GENERATORS,
    ASYNC_AWAIT,
    CURRYING,
    HIGHER_ORDER_FUNCTIONS,
    REDUX_SAGA
} from '../../constants/javascript';
import { dropdownOptions } from './options'

class Javascript extends Component {

    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        }).isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                article: PropTypes.string
            })
        })
    };

    handleRedirect = article => {
        const { history: { push } } = this.props;

        push(`/javascript/${article}`)
    };

    renderArticle = () => {
        const { match: { params: { article } } } = this.props;

        let Article = null;

        switch (article) {
            case JAVASCRIPT_OVERVIEW:
                Article = Overview;
                break;
            case JAVASCRIPT_REDUX_PUSH:
                Article = ReduxPush;
                break;
            case ASYNC_AWAIT:
                Article = AsyncAwait;
                break;
            case JAVASCRIPT_LIST_MAKER:
                Article = ListMaker;
                break;
            case JAVASCRIPT_SHOULD_I_INVEST:
                Article = ShouldIInvest;
                break;
            case JAVASCRIPT_BLOCK_CHAIN:
                Article = BlockChain;
                break;
            case GENERATORS:
                Article = Generators;
                break;
            case CURRYING:
                Article = Currying;
                break;
            case HIGHER_ORDER_FUNCTIONS:
                Article = HigherOrderFunctions;
                break;
            case REDUX_SAGA:
                Article = ReduxSagas;
                break;
            default:
                Article = Overview;
                break;
        }

        Article = withScroller(Article);

        return <Article />;
    };

    render() {

        const { match: { params: { article } } } = this.props;

        return (
            <Block
                margin={`${remCalc(100)} ${remCalc(20)}`}
            >
                <Grid stackable centered columns={3}>
                    <Grid.Row>
                        <ProjectHeader
                            title="Javascript"
                            subTitle={`Browser Power`}
                            placeholder='Select Project'
                            value={article}
                            options={dropdownOptions}
                            onChange={this.handleRedirect}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        {this.renderArticle()}
                    </Grid.Row>
                </Grid>
            </Block>
        );
    }
}

/**
 * @param open
 */
const mapStateToProps = ({
                             sidebar: {
                                 open
                             }
                         }) => ({
    open,
    selected: SIDEBAR_HOME
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSetSidebarOpen: setSidebarOpen
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Javascript));