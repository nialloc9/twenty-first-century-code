import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../Common/Styled/Block';
import ProjectHeader from '../Common/ProjectHeader';
import Overview from './Overview';
import Captcha from './Captcha';
import Csrf from './Csrf';
import VerifyEmail from './VerifyEmail';
import StyledComponents from './StyledComponents';
import Bem from './Bem';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/utils';
import { SIDEBAR_HOME } from '../../constants/sidebar';
import { PHP_CAPTCHA, PHP_CSRF, PHP_VERIFY_EMAIL, STYLED_COMPONENTS, BEM } from '../../constants/other';
import { dropdownOptions } from './options';

class Other extends Component {

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

        push(`/other/${article}`)
    };

    render() {

        const { match: { params: { article } } } = this.props;

        const Article = {
            [PHP_CAPTCHA]: Captcha,
            [PHP_CSRF]: Csrf,
            [PHP_VERIFY_EMAIL]: VerifyEmail,
            [STYLED_COMPONENTS]: StyledComponents,
            [BEM]: Bem,
        }[article] || Overview;

        return (
            <Block
                margin={`${remCalc(100)} ${remCalc(20)}`}
            >
                <Grid stackable centered columns={3}>
                    <Grid.Row>
                        <ProjectHeader
                            title="Other Articles"
                            subTitle={`while anything_else:`}
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Other));