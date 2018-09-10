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
                    Source code: <a target="_blank" href="https://github.com/nialloc9/asyncAwait">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    One of the best additions to javascript in my opinion has been async and await. I really like how clean the code can be made using them. At time of writing this
                    is a stage 3 feature and supported on edge. However, on node it is now supported since version 7.6. Promises can have 3 states, pending, fulfilled, or rejected. When a
                    promise is pending it can become fulfilled or rejected which then is handled using the appropriate handler then or catch.
                </Block>


                <Block margin={`${remCalc(20)} 0`}>
                    A criticsm of promises is that when they are nested they get very hard to read. It starts to become more and more difficult to read. We can see an example of this
                    below where multiple promises used inside the then's of other promises starts to get unmanagable quickly.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
/**
 * a function that resolves after 2 seconds
 * @param message
 */
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });

/**
 * these are nested promises. They get very messy the more you have.
 */
const nestedPromises = () => {
    waitFunction("hello").then(result => {
        waitFunction("world").then(result2 => {
            console.log(result + " " + result2);
        })
    })
};
                    `}
                </CodeBlock>
                <Block>
                    With async/await the asynchronous function will return a <a target="__blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">AsyncFunction object</a>.
                    When the async function is called it returns a promise. When the function returns a value the promise will be resolved. When it throws an exception the promise will be rejected. Inside the aync funtion we can
                    use the await expression which will pause the operation of the function until it is resolved and returns it's value.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    As we can see below when we create functions with the async keyword we can use await inside the function which allows us to assign the returned value from the promise.
                    In our example the waitFunction will be called with hello which will wait 2 seconds before moving to messageTwo which will wait for another 2 seconds before resolving. Now are
                    returned values from messageOne and messageTwo are printed out to the screen showing hello world.
                </Block>
                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
/**
 * a function that resolves after 2 seconds
 * @param message
 */
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });

/**
 * an example of async await
 * @returns {Promise}
 */
const asyncAwait = async () => {

    // assigns value resolved to const
    try {
        const messageOne = await waitFunction("hello");
        const messageTwo = await waitFunction("world");

        // prints out hello world
        console.log(messageOne + " " + messageTwo);
    } catch (error) {
        console.log("error1", error);
    }

};
`}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    But what if we want run multiple promises together? Async/await can also be used with promise.all to run multiple promises at once. This is useful
                    if we have multiple fetches that are needed but are not dependant on them. You can see an example of this below. It is important to note here though
                    that a single catch handles all the promises.
                </Block>


                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
/**
 * a function that resolves after 2 seconds
 * @param message
 */
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });

/**
 * an example of using promise.all with async await
 * @returns {Promise}
 */
const promiseAll = async () => {
    const [a, b] = await Promise.all([
        waitFunction("promise"),
        waitFunction("all")
    ]).catch(error => {
        console.log("promiseAll error", error);
    });

    console.log("promiseAll a: ", a);
    console.log("promiseAll b: ", b);
};
                    `}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Async/await allows us to really clean up the code and make it much more readable. But if we are going to do this then what about the try/catch? This does
                    not look clean. There must be a way to clean this up? My prefered way of handling errors in promises is to use a higher order function. These allow us
                    to handle errors without the try catch. We can see this below. Look at the errorHandler higher order function. This is a function that takes a function as an arguement.
                    It will resolve a promise with an array. The first value is an error and the second data. We can then destructure the error and data. Very clean and in my opinion
                    an excellant way of using async/await.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {`
/**
 * a function that resolves after 2 seconds
 * @param message
 */
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 2000);
  });

/**
 * throws an error
 */
const throwError = () => new Promise((resolve, reject) => reject("Error thrown in throwError"));

/**
 * handles errors in async functions
 * @param promise
 * returns an array. first item is an error second is the result
 */
const errorHandler = promise => promise.then(data =>  [null, data]).catch(err => [err]);

/**
 * a higher order function errorHandler can be used to remove the need for try catch statements
 * @returns {Promise}
 */
const asyncAwaitWithErrorHandler = async () => {

    // assigns value resolved to const
    const [error, data] = await errorHandler(throwError());

    if(error){
        console.log(error);
    }
};
                    `}
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Published on 19/12/2017
                </Block>
            </Block>
        )
    }
}

export default AsyncAwait;