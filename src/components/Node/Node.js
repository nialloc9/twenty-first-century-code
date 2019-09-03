import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import ProjectHeader from '../../components/Common/ProjectHeader';
import Overview from './Overview';
import NodeCluster from './NodeCluster';
import ApolloChat from './ApolloChat';
import withSidebar from '../../hoc/withSidebar';
import withScroller from '../../hoc/withScroller';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/utils';
import { SIDEBAR_HOME } from '../../constants/sidebar';
import { NODE_APOLLO, NODE_CLUSTER } from '../../constants/node';
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

    get article() {
        const {
            match: {
              params: { article }
            }
          } = this.props;

          return article
    }

    handleRedirect = article => {
        const { history: { push } } = this.props;

        push(`/node/${article}`)
    };

    renderArticle = () => {

        const Article = withScroller({
            [NODE_APOLLO]: ApolloChat,
            [NODE_CLUSTER]: NodeCluster
        }[this.article] || Overview)
          
        return <Article />
    }

    render() {
        
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
                            defaultValue={this.article}
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Node));