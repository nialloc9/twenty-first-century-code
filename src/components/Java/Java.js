import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import ProjectHeader from '../../components/Common/ProjectHeader';
import Overview from './Overview';
import Calculator from './Calculator';
import FindTheDoor from './FindTheDoor';
import InstantMessenger from './InstantMessenger';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_HOME } from '../../constants/sidebar';
import { JAVA_CALCULATOR, JAVA_GAME, JAVA_INSTANT_MESSENGER } from '../../constants/java';
import { dropdownOptions } from './options'

class Java extends Component {

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

        push(`/java/${article}`)
    };

    render() {

        const { match: { params: { article } } } = this.props;

        let Article = null;

        switch (article) {
            case JAVA_CALCULATOR:
                Article = Calculator;
                break;
            case JAVA_GAME:
                Article = FindTheDoor;
                break;
            case JAVA_INSTANT_MESSENGER:
                Article = InstantMessenger;
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
                            title="Java"
                            subTitle="And not the coffee"
                            placeholder='Select Project'
                            defaultValue={article}
                            options={dropdownOptions}
                            onChange={this.handleRedirect}
                        />
                    </Grid.Row>
                    <Grid.Row>
                        <Article />
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Java));