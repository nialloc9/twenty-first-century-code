import React, { Component } from "react";
import Block from "../../../components/Common/Styled/Block";
import Image from "../../../components/Common/Styled/Image";
import SoftLink from "../../../components/Common/Styled/SoftLink";
import Card from "./Card";
import { remCalc } from "../../../common/utils";
import machineLearning from "../../../static/images/new/machineLearning.png";

class CardFive extends Component {
  render() {
    return (
      <SoftLink to="/machine-learning">
        <Card>
          <Block
            padding={remCalc(2)}
            height="100%"
            width="100%"
            backgroundColor="white"
          >
            <Image
              fluid
              width="100%"
              height="100% !important"
              src={machineLearning}
            />
          </Block>
        </Card>
      </SoftLink>
    );
  }
}

export default CardFive;
