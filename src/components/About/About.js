import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import Github from './Github';
import Education from './Education';
import Other from './Other';
import Introduction from './Introduction';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_ABOUT } from '../../constants/sidebar';

class About extends Component {
    render() {

        return (
            <Block
                margin={`${remCalc(100)} ${remCalc(20)}`}
            >
                <Grid stackable centered>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Block width="100%" textAlign="center">
                                <Github />
                            </Block>
                        </Grid.Column>
                        <Grid.Column>
                            <Block maxWidth={remCalc(600)}>
                                <Introduction />
                            </Block>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <Block width="100%" margin={`${remCalc(20)} 0 0 0`} textAlign="center">
                                <Block display="inline-block">
                                    <Other />
                                </Block>
                            </Block>
                        </Grid.Column>
                        <Grid.Column>
                            <Education />
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
    selected: SIDEBAR_ABOUT
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(About));