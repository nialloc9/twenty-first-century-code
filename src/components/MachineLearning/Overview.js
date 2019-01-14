import React, { PureComponent } from "react";
import Block from "../Common/Styled/Block";
import Image from "../Common/Styled/Image";
import machineLearning from "../../static/images/new/machineLearning.png";
import theme from "../../config/theme";
import globals from "../../config/globals";
import { remCalc } from "../../common/helpers";

const { GITHUB } = globals;
const {
  colors: { fontColor },
  fontSize,
  lineHeight
} = theme;

class Overview extends PureComponent {
  render() {
    return (
      <Block
        fontColor={fontColor}
        lineHeight={lineHeight}
        fontSize={fontSize}
        maxWidth={remCalc(800)}
      >
        <Block>
          <Image
            src={machineLearning}
            margin="auto"
            size="large"
            alt="Machine learning image"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Machine learning is one of the most incredible and useful tools we
          have to date. Using alogorithms and statistical models we can train
          the computer to make it's own judgements and predictions based on
          training data. For me, I find it all fascinating. It appeals to the
          "builder" in me. I love building complex applications and to be able
          to power these applications with a brain that can improve it self
          without being explicitly programmed to do so. Wow!!.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          This portfolio set is currently in progress. You can find multiple
          examples of myql in use inside my{" "}
          <a target="_blank" href={GITHUB}>
            github
          </a>
          .
        </Block>
      </Block>
    );
  }
}

export default Overview;
