import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Article from "../Common/Article";
import { setVCheckDetails } from "../../actions/npm";
import logo from "../../static/images/projects/vcheck/logo.png";

class VCheck extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    downloads: PropTypes.number.isRequired,
    onSetVCheckDetails: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { onSetVCheckDetails } = this.props;

    onSetVCheckDetails();
  }

  onShoudComponentUpdate = ({ data: prevData }, { data: nextData }) => {
    const { isLoading: prevLoading } = prevData.find(({ type }) => type === "npm")
    const { isLoading: nextLoading } = nextData.find(({ type }) => type === "npm")

    return prevLoading !== nextLoading
  }

  render() {
    const { isLoading, downloads } = this.props;

    const head = {
      title: "validation check library",
      meta: [
        {
          name: 'description',
          content: 'a library of common validation use cases in javascript'
        },
        {
          name: 'keywords',
          content: 'npm validation, npm, redux, redux validation'
        }
      ]
    };

    const data = [
      {
        type: "image",
        src: logo,
        alt: "vcheck logo"
      },
      {
        type: "npm",
        isLoading,
        downloads,
        text: "VCheck",
        href: "https://www.npmjs.com/package/@nialloc9/vcheck"
      },
      {
          type: "source",
          href: "https://github.com/nialloc9/vcheck"
      },
      {
        type: "paragraph",
        text: `VCheck is an npm package for handling common validation use cases. It
        uses curried functions to create reusable functions to validate
        values. It also integrates seemlessly with the widely used redux-form
        package. Below we can see an example of how to use VCheck to validate
        a required value. VCheck methods always return one of 2 values. A
        error message if the value fails the validation or undefined if it
        passes. This way it can be easily integrated into most validation
        systems.`
      },
      {
        type: "code",
        code: `
import { validateRequired } from 'nialloc9@vcheck';
const error = validateRequired(myValue);

if(error) throw new Error(error);
...
`
      },
      {
        type: "paragraph",
        text: "To integrate with commonly used redux-form library is just as simple, if not simpler."
      },
      {
        type: "code",
        code: `
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
        `
      },
      {
        type: "published",
        date: "20/09/2018"
      }
    ]
    return <Article head={head} onShoudComponentUpdate={this.onShoudComponentUpdate} data={data} />
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
