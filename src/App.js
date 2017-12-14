import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid, Header as SemanticHeader } from 'semantic-ui-react';
import Block from './components/Common/Styled/Block';
import Header from './components/Common/Styled/Header';
import Card from './Card';
import withSidebar from './hoc/withSidebar';
import { setSidebarOpen, setSidebarSelected } from './actions/sidebar';
import theme from './config/theme';
import { remCalc } from './common/helpers';

const { colors: { first, third, fourth, second, fifth, fontColor } } = theme;


const hoverBoxShadow = `-1px 1px ${first},
    ${remCalc(-2)} ${remCalc(2)} ${first},
    ${remCalc(-3)} ${remCalc(3)} ${first},
    ${remCalc(-4)} ${remCalc(4)} ${first},
    ${remCalc(-5)} ${remCalc(5)} ${first};`;

class App extends Component {
  render() {
    return (
        <Block
            margin={`${remCalc(100)} ${remCalc(20)}`}
        >
            <Grid stackable centered columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Card>
                            <Block margin="20px">
                                <Header color={second}>
                                    Heading
                                </Header>
                            </Block>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Block margin="20px">
                                <Header color={second}>
                                    Heading
                                </Header>
                            </Block>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Block margin="20px">
                                <Header color={second}>
                                    Heading
                                </Header>
                            </Block>
                        </Card>
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
                        <Card>
                            <Block margin="20px">
                                <Header color={second}>
                                    Heading
                                </Header>
                            </Block>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Block margin="20px">
                                <Header color={second}>
                                    Heading
                                </Header>
                            </Block>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card>
                            <Block margin="20px">
                                <Header color={second}>
                                    Heading
                                </Header>
                            </Block>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Block>
    );
  }
}

/**
 * @param open
 * @param selected
 */
const mapStateToProps = ({
                             sidebar: {
                                 open,
                                 selected
                             }
                         }) => ({
    open,
    selected
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSetSidebarOpen: setSidebarOpen,
            onSetSidebarSelected: setSidebarSelected
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(App));