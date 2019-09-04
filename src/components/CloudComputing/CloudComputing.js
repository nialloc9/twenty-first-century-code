import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Grid } from "semantic-ui-react";
import Block from "../Common/Styled/Block";
import ProjectHeader from "../Common/ProjectHeader";
import Overview from "./Overview";
import S3Pipeline from "./S3Pipeline";
import withSidebar from "../../hoc/withSidebar";
import withScroller from "../../hoc/withScroller";
import { setSidebarOpen } from "../../actions/sidebar";
import { remCalc } from "../../common/utils";
import { SIDEBAR_HOME } from "../../constants/sidebar";
import { CIRCLE_CI_S3_CLOUDFRONT } from "../../constants/cloudComputing";
import { dropdownOptions } from "./options";

class CloudComputing extends Component {
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

    push(`/cloud-computing/${article}`);
  };

  renderArticle = () => {
    const {
      match: {
        params: { article }
      }
    } = this.props;

    const Article =
      {
        [CIRCLE_CI_S3_CLOUDFRONT]: S3Pipeline
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
              title="Cloud Computing"
              subTitle={`Cloud is about how you do computing, not where you do computing. - Paul Maritz, VMware CEO`}
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
)(withSidebar(CloudComputing));
