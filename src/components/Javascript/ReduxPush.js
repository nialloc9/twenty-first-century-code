import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Article from "../Common/Article";
import { setReduxPushDetails } from '../../actions/npm';
import logo from '../../static/images/projects/reduxPush/logo.png';

class ReduxPush extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    downloads: PropTypes.number.isRequired,
    onSetReduxPushDetails: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { onSetReduxPushDetails } = this.props;

    onSetReduxPushDetails();
  }

  onShoudComponentUpdate = ({ data: prevData }, { data: nextData }) => {
    const { isLoading: prevLoading } = prevData.find(({ type }) => type === "npm")
    const { isLoading: nextLoading } = nextData.find(({ type }) => type === "npm")

    return prevLoading !== nextLoading
  }

  render() {
    const { isLoading, downloads } = this.props;

    const head = {
      title: "redux push",
      meta: [
        {
          name: 'description',
          content: 'learn how to use redux push to provide browser push notifications inside your applications'
        },
        {
          name: 'keywords',
          content: 'react, redux, redux push, browser notifications, javascript'
        }
      ]
    };

    const data = [
      {
        type: "image",
        src: logo,
        alt: "Redux push logo"
      },
      {
        type: "npm",
        isLoading,
        downloads,
        text: "Redux Push",
        href: "https://www.npmjs.com/package/redux-push"
      },
      {
        type: "source",
        href: "https://github.com/nialloc9/redux-push"
      },
      {
        type: 'code',
        code: `
import { applyMiddleware } from 'redux';
import reduxPush from 'redux-push';
const middleware = applyMiddleware([reduxPush])
...
      `
      },
      {
        type: "paragraph",
        text: `Redux push is a npm package for redux middleware that enables seemlesss integration of push notifications into any
        redux application. Push notifications give a project that bit extra and allow another channel of communication with a
        user. From notifying when an upload is complete to prompts to users looking at differant screens that an action has occured
        redux-push makes it all simple.`
      },
      {
        type: "code",
        code: `
import { applyMiddleware } from "redux";
import reduxPush from 'redux-push';
const middleware = applyMiddleware([reduxPush])
...
`
      },
      {
        type: "paragraph",
        text: `Redux push is middleware for a redux store that allows it to be picked up and dropped into any redux application with only a few lines of code.
        All a user needs to do is import the middleware and pass it to redux's combineMiddleware helper function and there it is. Push notifications are enabled.
        To send a notification users need only dispatch an action with type of PUSH_SET that can be imported from the redux-push package.`
      },
      {
        type: "code",
        code: `
import  { PUSH_SET } from 'redux-push';

...
dispatch({
    type: PUSH_SET,
    payload: {
        message: "An action has occurred",
        visibiity: "show"
    }
})
...  `
      },
      {
        type: "published",
        date: "22/12/2017"
      },
    ]
    return <Article head={head} onShoudComponentUpdate={this.onShoudComponentUpdate} data={data} />
  }
}

/**
 * @param vcheckDownloads
 * @param vcheckLoading
 */
const mapStateToProps = ({ npm: { 
    reduxPushDownloads,
    reduxPushLoading 
}}) => ({
  downloads: reduxPushDownloads,
  isLoading: reduxPushLoading
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        onSetReduxPushDetails: setReduxPushDetails
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxPush);
