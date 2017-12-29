import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import logo from '../../static/images/projects/reduxPush/logo.png';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class ReduxPush extends PureComponent{

    render(){
        return(
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
                        src={logo}
                        margin="auto"
                        size="medium"
                        alt="Redux push logo"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    NPM package: <a target="_blank" href="https://www.npmjs.com/package/redux-push">redux-push</a>
                </Block>
                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <a target="_blank" href="https://github.com/nialloc9/angularjs-should-i-invest-web-app">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Redux push is a npm package for redux middleware that enables seemlesss integration of push notifications into any
                    redux application. Push notifications give a project that bit extra and allow another channel of communication with a
                    user. From notifying when an upload is complete to prompts to users looking at differant screens that an action has occured
                    redux-push makes it all simple.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
{`
import { applyMiddleware } from "redux";
import reduxPush from 'redux-push';
const middleware = applyMiddleware([reduxPush])
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Redux push is middleware for a redux store that allows it to be picked up and dropped into any redux application with only a few lines of code.
                    All a user needs to do is import the middleware and pass it to redux's combineMiddleware helper function and there it is. Push notifications are enabled.
                    To send a notification users need only dispatch an action with type of PUSH_SET that can be imported from the redux-push package.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
{`
import  { PUSH_SET } from 'redux-push';

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
            </Block>
        )
    }
}

export default ReduxPush;