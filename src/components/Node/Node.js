import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import ProjectHeader from '../../components/Common/ProjectHeader';
import Overview from './Overview';
import NodeCluster from './NodeCluster';
import AsyncAwait from './AsyncAwait';
import ApolloChat from './ApolloChat';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_HOME } from '../../constants/sidebar';
import { NODE_APOLLO, NODE_ASYNC_AWAIT, NODE_CLUSTER } from '../../constants/node';
import { dropdownOptions } from './options';

class Node extends Component {

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

        push(`/node/${article}`)
    };

    render() {

        const { match: { params: { article } } } = this.props;

        let Article = null;

        switch (article) {
            case NODE_APOLLO:
                Article = ApolloChat;
                break;

            case NODE_ASYNC_AWAIT:
                Article = AsyncAwait;
                break;

            case NODE_CLUSTER:
                Article = NodeCluster;
                break;

            default:
                Article = Overview;
                break;
        }

        return (
            <Block
                margin={`${remCalc(100)} ${remCalc(20)}`}
            >
                <Grid stackable centered columns={3}>
                    <Grid.Row>
                        <ProjectHeader
                            title="NodeJs"
                            subTitle={`The power of js on the server..`}
                            placeholder='Select Project'
                            defaultValue={article}
                            options={dropdownOptions}
                            onChange={this.handleRedirect}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        { Article && <Article /> }
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Node));