import React, { PureComponent } from "react";
import Block from "../Common/Styled/Block";
import CodeBlock from "../Common/Styled/CodeBlock";
import SoftLink from "../Common/Styled/SoftLink";
import Image from "../Common/Styled/Image";
import main from "../../static/images/projects/colorMatcher/main.png";
import clusters from "../../static/images/projects/cancerClassifier/clusters.png";
import room from "../../static/images/projects/apolloChat/room.png";
import theme from "../../config/theme";
import { remCalc } from "../../common/helpers";
import { STOCK_PREDICTOR } from "../../constants/machineLearning";

const {
  colors: { fontColor },
  fontSize,
  lineHeight
} = theme;

class ColorMatcher extends PureComponent {
  render() {
    return (
      <Block
        fontColor={fontColor}
        fontSize={fontSize}
        lineHeight={lineHeight}
        maxWidth={remCalc(800)}
        tabletHorizontalMaxWidth={remCalc(600)}
        mobileMaxWidth={remCalc(300)}
      >
        <Block>
          <Image
            src={main}
            margin="auto"
            size="big"
            alt="Color matcher running"
          />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <a
            target="_blank"
            href="https://github.com/nialloc9/machine-learning-color-matcher"
          >
            GitHub
          </a>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          Machine learninging can now be done on the browser using javascript.
          This is a very powerful feature allowing us to do machine learning
          without having to go to the server to get the results from a pre
          trained model. This has obvious benefits but a word of warning machine
          learning models can be massive. Recently I was doing some sentimental
          analysis using two files of approx 1MB in size. The resulting model
          file size was over 100MB in size. Therefore client side machine
          learning is not always possible and like everything else when to use
          it is up to the developer but it is a powerfull addition to any
          developers toolbelt.
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          In this project we are trying to match the color selected by the user
          with either light or dark text. This is one of those annoying times
          when the color will change and some colors just look wrong with a
          light or dark text. For example white text with a white background
          would make the text invisible. You could fix this with a complicated
          combination of selection statements but you could also use the power
          of machine learning libraries like brainJs to handle this. Simply
          create a NeuralNetwork and train it to predict outcomes based on
          predetermined inputs. Then optimize it by fixing any edge cases such
          as white text and yellow background.
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
const canvas = document.getElementById("canvas");
const input = document.getElementById("color-picker");

const network = new brain.NeuralNetwork();

const trainingData = [
  { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { dark: 1 } },
  { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { light: 1 } },
  { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { light: 1 } },
  { input: { r: 1, g: 1, b: 0.17 }, output: { light: 1 } }
];

network.train(trainingData);

/**
 * @description converts hex to rgb
 * @param {string} hex
 * @returns {*} rgb
 */
function getRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100
      }
    : null;
}

/**
 * @description handles a change event
 * @param {*} event
 * @returns {void}
 */
function onChange(event) {
  const hexColor = event.target.value;

  const rgb = getRgb(hexColor);

  const result = brain.likely(rgb, network);
  console.log(rgb, result);
  canvas.style.backgroundColor = hexColor;
  canvas.innerText = hexColor;
  canvas.style.color = result === "dark" ? "white" : "black";
}

input.addEventListener("change", onChange);

`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>Published on 17/01/2019</Block>
      </Block>
    );
  }
}

export default ColorMatcher;