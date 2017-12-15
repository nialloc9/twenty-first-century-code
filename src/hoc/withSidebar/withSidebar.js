import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu, Popup } from 'semantic-ui-react';
import Styled from 'styled-components';
import MenuItem from './MenuItem';
import Block from '../../components/Common/Styled/Block';
import Icon from '../../components/Common/Styled/Icon';
import SoftLink from "../../components/Common/Styled/SoftLink";
import ClickOutside from '../../components/Common/Clickoutside';
import { SIDEBAR_HOME, SIDEBAR_PORTFOLIO, SIDEBAR_ACHIEVEMENTS } from '../../constants/sidebar';
import { remCalc } from '../../common/helpers';
import isMobile from '../../common/isMobile';
import theme from '../../config/theme';
import globals from '../../config/globals';

const { colors: { first } } = theme;

const StyledSidebar = Styled(Sidebar)`
    background-color: ${first} !important;
`;

const {
    REACT_APP_PHONE_NUMBER,
    REACT_APP_EMAIL,
    REACT_APP_YOUTUBE_CHANNEL,
    REACT_APP_LINKEDIN,
    REACT_APP_GITHUB
} = globals;

const withSidebar = WrappedComponent =>
    class SidebarLeftOverlay extends Component {

        static propTypes = {
            open: PropTypes.bool.isRequired,
            selected: PropTypes.string.isRequired,
            onSetSidebarOpen: PropTypes.func.isRequired,
            onSetSidebarSelected: PropTypes.func.isRequired,
        };

        state = {
            closeHover: false
        };

        handleCloseOnHover = () => {

            const { closeHover } = this.state;

            this.setState({
                closeHover: !closeHover
            });
        };

        handleClickOutside = () => {

            const { open, onSetSidebarOpen } = this.props;

            open && onSetSidebarOpen(false);
        };

        render() {
            const { open, selected, onSetSidebarOpen, onSetSidebarSelected } = this.props;

            const { closeHover } = this.state;

            return (
                <Block>
                    <Sidebar.Pushable>
                        <ClickOutside
                            onClickOutside={this.handleClickOutside}
                        >
                            <StyledSidebar as={Menu} animation='push' width='thin' visible={open} icon='labeled' vertical>
                                <Block backgroundColor={first}>
                                    <MenuItem
                                        selected={selected}
                                        name="close"
                                        icon="close"
                                        loading={closeHover}
                                        onClick={onSetSidebarOpen}
                                        onMouseEnter={this.handleCloseOnHover}
                                        onMouseLeave={this.handleCloseOnHover}
                                    />
                                    <SoftLink
                                        to="/"
                                    >
                                        <MenuItem
                                            selected={selected}
                                            name={SIDEBAR_HOME}
                                            icon="home"
                                            text="Home"
                                            onClick={onSetSidebarSelected}
                                        />
                                    </SoftLink>
                                    <MenuItem
                                        selected={selected}
                                        name={SIDEBAR_PORTFOLIO}
                                        icon="folder"
                                        text="Portfolio"
                                        onClick={onSetSidebarSelected}
                                    />
                                    <MenuItem
                                        selected={selected}
                                        name={SIDEBAR_ACHIEVEMENTS}
                                        icon="trophy"
                                        text="Achievements"
                                        onClick={onSetSidebarSelected}
                                    />
                                    <Popup
                                        position='top center'
                                        content={REACT_APP_EMAIL}
                                        trigger={<MenuItem
                                            icon="mail"
                                            text="Email"
                                            href={`mailto:${REACT_APP_EMAIL}`}
                                            target="_top"
                                        />}
                                    />
                                    <Popup
                                        position='top left'
                                        content={REACT_APP_PHONE_NUMBER}
                                        trigger={<MenuItem
                                            icon="phone"
                                            text="Phone"
                                            href={isMobile() ? `tel:${REACT_APP_PHONE_NUMBER}` : '#'}
                                        />}
                                    />
                                    <MenuItem
                                        icon="github square"
                                        text="Github"
                                        href={REACT_APP_GITHUB}
                                        target="_blank"
                                    />
                                    <MenuItem
                                        icon="linkedin square"
                                        text="Linkedin"
                                        href={REACT_APP_LINKEDIN}
                                        target="_blank"
                                    />
                                    <MenuItem
                                        icon="youtube"
                                        text="YouTube"
                                        href={REACT_APP_YOUTUBE_CHANNEL}
                                        target="_blank"
                                    />
                                </Block>
                            </StyledSidebar>
                        </ClickOutside>
                        <Sidebar.Pusher>
                            <Block
                                cursor="pointer"
                                onClick={onSetSidebarOpen}
                                position="absolute"
                                top={remCalc(10)}
                                display={open ? "none" : false}
                            >
                                <Icon name="content" size="big" color={first} />
                            </Block>

                            <Block
                                minHeight={remCalc(window.innerHeight)}

                            >
                                <WrappedComponent
                                    {...this.props}
                                    toggleSidebar={onSetSidebarOpen}
                                />
                            </Block>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Block>
            )
        }
    };

export default withSidebar;