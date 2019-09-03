import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../Common/Styled/Block';
import Header from '../Common/Styled/Header';
import { remCalc } from '../../common/utils';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';

class Error404 extends Component {
    render() {
        return (
            <Block margin={remCalc(200)}>
                <Grid centered>
                    <Grid.Row>
                        <Block margin={remCalc(200)}>
                            <Header as="h1">
                                Page not found.
                            </Header>
                        </Block>
                    </Grid.Row>
                </Grid>
            </Block>
        )
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
    selected: "none"
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Error404));