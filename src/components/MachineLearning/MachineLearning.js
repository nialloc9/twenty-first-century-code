import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from "semantic-ui-react";
import Block from "../Common/Styled/Block";
import ProjectHeader from "../Common/ProjectHeader";
import Overview from "./Overview";
import StockPredictor from "./StockPredictor";
import CancerClassifier from "./CancerClassifier";
import CancerSupportVectorMachine from "./CancerSupportVectorMachine";
import ColorMatcher from "./ColorMatcher";
import KMeans from "./KMeans";
import MeanShift from "./MeanShift";
import withSidebar from "../../hoc/withSidebar";
import withScroller from "../../hoc/withScroller";
import { setSidebarOpen } from "../../actions/sidebar";
import { remCalc } from "../../common/helpers";
import {
  STOCK_PREDICTOR,
  CANCER_CLASSIFIER,
  COLOR_MATCHER,
  CANCER_SUPPORT_VECTOR_MACHINE,
  K_MEANS,
  MEAN_SHIFT
} from "../../constants/machineLearning";
import { SIDEBAR_HOME } from "../../constants/sidebar";
import { dropdownOptions } from "./options";

class MachineLearning extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        article: PropTypes.string
      })
    })
  };

  handleRedirect = article => {
    const {
      history: { push }
    } = this.props;

    push(`/machine-learning/${article}`);
  };

  renderArticle = () => {
    const {
      match: {
        params: { article }
      }
    } = this.props;

    const Article =
      {
        [CANCER_SUPPORT_VECTOR_MACHINE]: CancerSupportVectorMachine,
        [CANCER_CLASSIFIER]: CancerClassifier,
        [COLOR_MATCHER]: ColorMatcher,
        [STOCK_PREDICTOR]: StockPredictor,
        [K_MEANS]: KMeans,
        [MEAN_SHIFT]: MeanShift
      }[article] || Overview;

    const ArticleWithSideBar = withScroller(Article);

    return <ArticleWithSideBar />;
  };

  render() {
    const {
      match: {
        params: { article }
      }
    } = this.props;

    return (
      <Block margin={`${remCalc(100)} ${remCalc(20)}`}>
        <Grid stackable centered columns={3}>
          <Grid.Row>
            <ProjectHeader
              title="Machine Learning"
              subTitle={`More data beats clever algorithms, but better data beats more data. - Peter Norvig`}
              placeholder="Select Project"
              defaultValue={article}
              options={dropdownOptions}
              onChange={this.handleRedirect}
            />
          </Grid.Row>
          <Grid.Row>{this.renderArticle()}</Grid.Row>
        </Grid>
      </Block>
    );
  }
}

/**
 * @param open
 */
const mapStateToProps = ({ sidebar: { open } }) => ({
  open,
  selected: SIDEBAR_HOME
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onSetSidebarOpen: setSidebarOpen
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSidebar(MachineLearning));
