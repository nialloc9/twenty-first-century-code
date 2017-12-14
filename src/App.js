import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from './components/Common/Styled/Block';
import withSidebar from './hoc/withSidebar';
import { setSidebarOpen, setSidebarSelected } from './actions/sidebar';

class App extends Component {
  render() {
    return (
        <Grid stackable centered container>

        </Grid>
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