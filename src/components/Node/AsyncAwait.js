import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import blueArrow from '../../static/images/projects/asyncAwait/blueArrow.jpg';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class AsyncAwait extends PureComponent{

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
                        src={blueArrow}
                        margin="auto"
                        size="medium"
                        alt="A blue arrow"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    One of the best additions to javascript in my opinion has been async and await. I really like how clean the code can be made using them. At time of writing this
                    is a stage 3 feature and supported on edge. However, on node it is now supported since version 7.6. Promises can have 3 states, pending, fulfilled, or rejected. When a
                    promise is pending it can become fulfilled or rejected which then is handled using the appropriate handler then or catch.
                </Block>

                <Block>
                    With async/await the anycrounouse function will return a <a target="__blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">AsyncFunction object</a>.
                    When the async function is called it returns a promise. When the function returns a value the promise will be resolved. When it throws an exception the promise will be rejected. Inside the aync funtion we can
                    use the await expression which will pause the operation of the function until it is resolved and returns it's value.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });

const run = async () => {
    const messageOne = await waitFunction("hello");
    const messageTwo = await waitFunction("world");

    // prints out hello world
    console.log(messageOne + " " + messageTwo);
};

run();
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    As we can see from above when we create functions with the async keyword we can use await inside the function which allows us to assign the returned value from the promise.
                    In our example the waitFunction will be called with hello which will wait 2 seconds before moving to messageTwo which will wait for another 2 seconds before resolving. Now are
                    returned values from messageOne and messageTwo are printed out to the screen showing hello world. Now let's compare that to nested callbacks.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });

waitFunction("hello").then(result => {
    waitFunction("world").then(result2 => {
        console.log(result + " " + result2);
    })
})
                    `}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Above we see an example that we would of previously used where nested callbacks are used. This is much harder to read then our example at the start using
                    aysnc await and causes confusion when reading code.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 19/12/2017
                </Block>
            </Block>
        )
    }
}

export default AsyncAwait;