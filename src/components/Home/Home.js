import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Header as SemanticHeader } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import Header from '../../components/Common/Styled/Header';
import CardOne from './Cards/CardOne';
import CardTwo from './Cards/CardTwo';
import CardThree from './Cards/CardThree';
import CardFour from './Cards/CardFour';
import CardFive from './Cards/CardFive';
import CardSix from './Cards/CardSix';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_HOME } from '../../constants/sidebar';

const { colors: { fontColor } } = theme;

class Home extends Component {
    render() {
        return (
            <Block
                margin={`${remCalc(100)} ${remCalc(20)}`}
            >
                <Grid stackable centered columns={3}>
                    <Grid.Row>
                        <Grid.Column>
                            <CardOne />
                        </Grid.Column>
                        <Grid.Column>
                            <CardTwo />
                        </Grid.Column>
                        <Grid.Column>
                            <CardThree />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Block margin={`${remCalc(100)} 0`}>
                            <Header as="h1" color={fontColor}>
                                Welcome to twenty first century code.
                                <SemanticHeader.Subheader>
                                    <Block color={fontColor}>
                                        Super simple super awesome..
                                    </Block>
                                </SemanticHeader.Subheader>
                            </Header>
                        </Block>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <CardFour />
                        </Grid.Column>
                        <Grid.Column>
                            <CardFive />
                        </Grid.Column>
                        <Grid.Column>
                            <CardSix />
                        </Grid.Column>
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Home));