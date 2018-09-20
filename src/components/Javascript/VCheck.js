import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Block from "../Common/Styled/Block";
import CodeBlock from "../Common/Styled/CodeBlock";
import Image from "../Common/Styled/Image";
import { setVCheckDetails } from "../../actions/npm";
import logo from "../../static/images/projects/vcheck/logo.png";
import theme from "../../config/theme";
import { remCalc } from "../../common/helpers";
import withLoader from "../../hoc/withLoader";

const {
  colors: { fontColor },
  fontSize,
  lineHeight
} = theme;

const LoadingBlock = withLoader(Block);

class VCheck extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    downloads: PropTypes.number.isRequired,
    onSetVCheckDetails: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { onSetVCheckDetails } = this.props;

    onSetVCheckDetails();
  }

  render() {
    const { isLoading, downloads } = this.props;

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
          <Image src={logo} margin="auto" size="medium" alt="Redux push logo" />
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          NPM package:{" "}
          <a
            target="_blank"
            href="https://www.npmjs.com/package/@nialloc9/vcheck"
          >
            VCheck
          </a>
        </Block>

        <LoadingBlock loading={isLoading} margin={`${remCalc(20)} 0`}>
          Downloads: {downloads}
        </LoadingBlock>

        <Block margin={`${remCalc(20)} 0`}>
          Source code:{" "}
          <a target="_blank" href="https://github.com/nialloc9/vcheck">
            GitHub
          </a>
        </Block>

        <Block margin={`${remCalc(20)} 0`}>
          VCheck is an npm package for handling common validation use cases. It
          uses curried functions to create reusable functions to validate
          values. It also integrates seemlessly with the widely used redux-form
          package. Below we can see an example of how to use VCheck to validate
          a required value. VCheck methods always return one of 2 values. A
          error message if the value fails the validation or undefined if it
          passes. This way it can be easily integrated into most validation
          systems.
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
...
import { validateRequired } from 'nialloc9@vcheck';
const error = validateRequired(myValue);

if(error) throw new Error(error);
...
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>
          To integrate with commonly used redux-form library is just as simple,
          if not simpler.
        </Block>

        <CodeBlock margin={`${remCalc(20)} 0`}>
          {`
...
import { validateRequired } from 'nialloc9/vcheck';
        import { Field } from 'redux-form';

        <Field
        name="name"
        size="small"
        type="text"
        component="input"
        validate={validateRequired}

  />
...
`}
        </CodeBlock>

        <Block margin={`${remCalc(20)} 0`}>Published on 20/09/2018</Block>
      </Block>
    );
  }
}

/**
 * @param vcheckDownloads
 * @param vcheckLoading
 */
const mapStateToProps = ({ npm: { vcheckDownloads, vcheckLoading } }) => ({
  downloads: vcheckDownloads,
  isLoading: vcheckLoading
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onSetVCheckDetails: setVCheckDetails
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VCheck);
