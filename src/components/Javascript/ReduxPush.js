import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Block, CodeBlock, Image, Link} from '../Common/Styled';
import { setReduxPushDetails } from '../../actions/npm';
import logo from '../../static/images/projects/reduxPush/logo.png';
import { remCalc } from '../../common/helpers';
import withLoader from '../../hoc/withLoader';

const LoadingBlock = withLoader(Block);

class ReduxPush extends PureComponent{

    static propTypes = {
        reduxPushLoading: PropTypes.bool.isRequired,
        reduxPushDownloads: PropTypes.number.isRequired,
        onSetReduxPushDetails: PropTypes.func.isRequired,
    };

    componentWillMount(){

        const { onSetReduxPushDetails } = this.props;

        onSetReduxPushDetails();
    }

    render(){

        const { reduxPushLoading, reduxPushDownloads } = this.props;

        return(
            <Block
                maxWidth={remCalc(800)}
                tabletHorizontalMaxWidth={remCalc(600)}
                mobileMaxWidth={remCalc(300)}
            >
                <Block>
                    <Image
                        src={logo}
                        margin="auto"
                        size="medium"
                        alt="Redux push logo"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    NPM package: <Link target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/redux-push">redux-push</Link>
                </Block>

                <LoadingBlock loading={reduxPushLoading}  margin={`${remCalc(20)} 0`}>
                    Downloads: {reduxPushDownloads}
                </LoadingBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <Link target="_blank" href="https://github.com/nialloc9/angularjs-should-i-invest-web-app">GitHub</Link>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Redux push is a npm package for redux middleware that enables seemlesss integration of push notifications into any
                    redux application. Push notifications give a project that bit extra and allow another channel of communication with a
                    user. From notifying when an upload is complete to prompts to users looking at differant screens that an action has occured
                    redux-push makes it all simple.
                </Block>

                <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
{`import { applyMiddleware } from "redux";
import reduxPush from 'redux-push';
const middleware = applyMiddleware([reduxPush])
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Redux push is middleware for a redux store that allows it to be picked up and dropped into any redux application with only a few lines of code.
                    All a user needs to do is import the middleware and pass it to redux's combineMiddleware helper function and there it is. Push notifications are enabled.
                    To send a notification users need only dispatch an action with type of PUSH_SET that can be imported from the redux-push package.
                </Block>

                <CodeBlock language="javascript" margin={`${remCalc(20)} 0`}>
{`import  { PUSH_SET } from 'redux-push';

...
dispatch({
    type: PUSH_SET,
    payload: {
        message: "An action has occurred",
        visibiity: "show"
    }
})
...
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 22/12/2017
                </Block>
            </Block>
        )
    }
}

/**
 * @param reduxPushDownloads
 * @param reduxPushLoading
 */
const mapStateToProps = ({
                             npm: {
                                 reduxPushDownloads,
                                 reduxPushLoading
                             }
                         }) => ({
    reduxPushDownloads,
    reduxPushLoading
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxPush);