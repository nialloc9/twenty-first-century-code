import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu } from 'semantic-ui-react';
import Styled from 'styled-components';
import MenuItem from './MenuItem';
import Block from '../../components/Common/Styled/Block';
import Icon from '../../components/Common/Styled/Icon';
import { SIDEBAR_HOME, SIDEBAR_PORTFOLIO, SIDEBAR_ACHIEVEMENTS } from '../../constants/sidebar';
import { remCalc } from '../../common/helpers';
import theme from '../../config/theme';

const { colors: { first } } = theme;

const StyledSidebar = Styled(Sidebar)`
    background-color: ${first} !important;
`;

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

        render() {
            const { open, selected, onSetSidebarOpen, onSetSidebarSelected } = this.props;

            const { closeHover } = this.state;

            return (
                <Block>
                    <Sidebar.Pushable>
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
                                <MenuItem
                                    selected={selected}
                                    name={SIDEBAR_HOME}
                                    icon="home"
                                    text="Home"
                                    onClick={onSetSidebarSelected}
                                />
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
                                <MenuItem
                                    icon="mail"
                                    text="Achievements"
                                />
                                <MenuItem
                                    icon="mail"
                                    text="Achievements"
                                />
                                <MenuItem
                                    icon="github square"
                                    text="Github"
                                />
                                <MenuItem
                                    icon="linkedin square"
                                    text="Linkedin"
                                />
                                <MenuItem
                                    icon="youtube"
                                    text="YouTube"
                                />
                            </Block>
                        </StyledSidebar>
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