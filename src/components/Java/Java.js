import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import ProjectHeader from '../../components/Common/ProjectHeader';
import Overview from './Overview';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import { setJavaOpen } from '../../actions/java';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_PORTFOLIO } from '../../constants/sidebar';
import { JAVA_OVERVIEW } from '../../constants/java';
import { dropdownOptions } from './options'

class Java extends Component {

    static propTypes = {
        javaOpen: PropTypes.string.isRequired,
        onSetJavaOpen: PropTypes.func.isRequired,
    };

    render() {

        const { javaOpen, onSetJavaOpen } = this.props;

        let Article = null;

        switch (javaOpen) {
            case JAVA_OVERVIEW:console.log("hello")
                Article = Overview;
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
                            defaultValue={javaOpen}
                            options={dropdownOptions}
                            onChange={onSetJavaOpen}
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
 * @param javaOpen
 */
const mapStateToProps = ({
                             sidebar: {
                                 open
                             },
    java: {
                                 open: javaOpen
    }
                         }) => ({
    open,
    javaOpen,
    selected: SIDEBAR_PORTFOLIO
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onSetSidebarOpen: setSidebarOpen,
            onSetJavaOpen: setJavaOpen
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Java));