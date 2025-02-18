import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Sidebar, Menu, Popup } from "semantic-ui-react";
import MenuItem from "./MenuItem";
import Block from "../../components/Common/Styled/Block";
import Icon from "../../components/Common/Styled/Icon";
import ClickOutside from "../../components/Common/Clickoutside";
import { SIDEBAR_HOME, SIDEBAR_ABOUT } from "../../constants/sidebar";
import { isMobile, remCalc } from "../../common/utils";
import theme from "../../config/theme";
import globals from "../../config/globals";
import cv from "../../static/files/cv.pdf";

const {
  colors: { first }
} = theme;

const {
  PHONE_NUMBER,
  EMAIL,
  YOUTUBE_CHANNEL,
  TWITTER,
  LINKEDIN,
  GITHUB
} = globals;

const withSidebar = WrappedComponent =>
  class SidebarLeftOverlay extends Component {
    static propTypes = {
      open: PropTypes.bool.isRequired,
      selected: PropTypes.string.isRequired,
      onSetSidebarOpen: PropTypes.func.isRequired
    };

    handleClickOutside = () => {
      const { open, onSetSidebarOpen } = this.props;

      open && onSetSidebarOpen(false);
    };

    handleRedirect = to => () => {
      const {
        history: { push }
      } = this.props;
      push(to);
    };

    render() {
      const { open, selected, onSetSidebarOpen } = this.props;

      return (
        <Fragment>
          <Sidebar.Pushable>
            <ClickOutside onClickOutside={this.handleClickOutside}>
              <Sidebar
                as={Menu}
                animation="push"
                width="thin"
                visible={open}
                icon="labeled"
                vertical
              >
                <Block backgroundColor={first} height="100%">
                  <MenuItem
                    selected={selected}
                    name="close"
                    icon="close"
                    rotate
                    onClick={onSetSidebarOpen}
                    onMouseEnter={this.handleCloseOnHover}
                    onMouseLeave={this.handleCloseOnHover}
                  />
                  <MenuItem
                    selected={selected}
                    name={SIDEBAR_HOME}
                    icon="home"
                    text="Home"
                    onClick={this.handleRedirect("/")}
                  />
                  <MenuItem
                    selected={selected}
                    name={SIDEBAR_ABOUT}
                    icon="user circle"
                    text="About"
                    onClick={this.handleRedirect("/about")}
                  />
                  <MenuItem
                    icon="file pdf outline"
                    text="Resume"
                    href={cv}
                    target="_blank"
                    download="NiallOConnorResume.pdf"
                  />
                  <Popup
                    position="top center"
                    content={EMAIL}
                    trigger={
                      <Block>
                        <MenuItem
                          icon="mail"
                          text="Email"
                          href={`mailto:${EMAIL}`}
                          target="_top"
                        />
                      </Block>
                    }
                  />
                  <Popup
                    position="top left"
                    content={PHONE_NUMBER}
                    trigger={
                      <Block>
                        <MenuItem
                          icon="phone"
                          text="Phone"
                          href={isMobile ? `tel:${PHONE_NUMBER}` : "#"}
                        />
                      </Block>
                    }
                  />
                  <MenuItem
                    icon="github square"
                    text="Github"
                    href={GITHUB}
                    target="_blank"
                  />
                  <MenuItem
                    icon="twitter"
                    text="Twitter"
                    href={TWITTER}
                    target="_blank"
                  />
                  <MenuItem
                    icon="linkedin square"
                    text="Linkedin"
                    href={LINKEDIN}
                    target="_blank"
                  />
                  <MenuItem
                    icon="youtube"
                    text="YouTube"
                    href={YOUTUBE_CHANNEL}
                    target="_blank"
                  />
                </Block>
              </Sidebar>
            </ClickOutside>
            <Sidebar.Pusher>
              <Block
                cursor="pointer"
                onClick={onSetSidebarOpen}
                position="absolute"
                top={remCalc(10)}
                display={open ? "none" : undefined}
              >
                <Icon name="content" size="big" color={first} />
              </Block>

              <Block minHeight={remCalc(window.innerHeight)}>
                <WrappedComponent
                  {...this.props}
                  toggleSidebar={onSetSidebarOpen}
                />
              </Block>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Fragment>
      );
    }
  };

export default withSidebar;
