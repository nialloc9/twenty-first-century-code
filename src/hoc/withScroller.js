import React, { Component } from "react";
import PropTypes from "prop-types";


const withScroller = WrappedComponent =>
  class Scroller extends Component {

    static propTypes = {
      isScrollOnMount: PropTypes.bool
    };

    static defaultProps = {
      isScrollOnMount: true
    };

    handleScrollTo = (top = 0, left = 0) => window.scrollTo(top, left);

    componentDidMount(){
        const { isScrollOnMount } = this.props;

        isScrollOnMount && this.handleScrollTo();
    };

    render() {

      const { isScrollOnMount, ...rest } = this.props;
      return <WrappedComponent {...rest} onScrollTo={this.handleScrollTo} />;
    }
  };

export default withScroller;
