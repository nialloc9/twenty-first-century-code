import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from 'semantic-ui-react';
import Block from '../../components/Common/Styled/Block';
import ProjectHeader from '../../components/Common/ProjectHeader';
import Overview from './Overview';
import Captcha from './Captcha';
import Csrf from './Csrf';
import VerifyEmail from './VerifyEmail';
import withSidebar from '../../hoc/withSidebar';
import { setSidebarOpen } from '../../actions/sidebar';
import { remCalc } from '../../common/helpers';
import { SIDEBAR_PORTFOLIO } from '../../constants/sidebar';
import { PHP_CAPTCHA, PHP_CSRF, PHP_VERIFY_EMAIL } from '../../constants/php';
import { dropdownOptions } from './options';

class Php extends Component {

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

        push(`/php/${article}`)
    };

    render() {

        const { match: { params: { article } } } = this.props;

        let Article = null;

        switch (article) {
            case PHP_CAPTCHA:
                Article = Captcha;
                break;
            case PHP_CSRF:
                Article = Csrf;
                break;
            case PHP_VERIFY_EMAIL:
                Article = VerifyEmail;
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
                            title="Php"
                            subTitle={`<?php echo "hello world!"; ?>`}
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
    selected: SIDEBAR_PORTFOLIO
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

export default connect(mapStateToProps, mapDispatchToProps)(withSidebar(Php));