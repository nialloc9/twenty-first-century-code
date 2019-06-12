import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import Block from "../../components/Common/Styled/Block";
import SoftLink from "../../components/Common/Styled/SoftLink";
import Link from "../../components/Common/Styled/Link";

class Other extends Component {
  render() {
    return (
      <Block>
        <Message>
          <Message.Header>Other</Message.Header>
          <Message.List>
            <Message.Item>
              Development employee of the quarter. 2017
            </Message.Item>
            <Message.Item>
              Founded{" "}
              <SoftLink to="https://apollochat.co.uk">Apollo Chat</SoftLink>.
              2018
            </Message.Item>
            <Message.Item>
              Founded <SoftLink to="/">Twenty First Century Code</SoftLink>.
              2017
            </Message.Item>
            <Message.Item>
              Created{" "}
              <Link
                href="https://github.com/nialloc9/ocwebtech-source-code"
                target="__blank"
                rel="noopener noreferrer"
              >
                OCWebTech
              </Link>
              . 2016
            </Message.Item>
            <Message.Item>
              Created{" "}
              <Link href="https://github.com/nialloc9/igoalo" target="__blank" rel="noopener noreferrer">
                iGoalo social network
              </Link>
              . 2015
            </Message.Item>
            <Message.Item>TOPIK korean examinations level 2. 2015</Message.Item>
          </Message.List>
        </Message>
      </Block>
    );
  }
}

export default Other;
