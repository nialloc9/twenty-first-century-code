import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import together from '../../static/images/projects/currying/together-3-1162465-1278x903.jpg';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class Currying extends PureComponent{

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
                        src={together}
                        margin="auto"
                        size="large"
                        alt="Together image"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <a target="_blank" href="https://github.com/nialloc9/currying">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Put simply currying is a way of creating functions that allow to pass some of the arguements needed for it and the rest at another time. This
                    means you can pass all of the arguements expected and get a result or pass some of them and get a function returned that expects the rest. Currying is
                    a concept from functional programming that allows us to build functions that are consistent, easy to use, and very readable. Using partial functions we are
                    able to reduce duplicate code that would otherwise cause bloat. Now let's look at our first curried function:
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
`
/**
 * a simple example of how to add 2 numbers together using currying
 * @param number1 - This is the set number. This will not change.
 */
const simpleAdd = number1 => number2 => number1 + number2;

const add10 = simpleAdd(10);

const twenty = add10(10);
const thirty = add10(20);

console.log("Twenty:" + twenty); //Twenty: 20
console.log("Thirty:" + thirty); //Thirty: 30
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    This is a very simple example of how we pass one arguement to begin with of 10. This returns a function expecting another arguement before returingin a result.
                    Now we can use this anytime we want to add 10 to a number. Useful? Not really but the concept is clear. Below, you can see two more complicated examples that show
                    how useful and reuseable curried functions can be.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
                        `
/**
 * creates a greeting string using a deeply curried function
 * @param greeting
 */
const deeplyCurriedGreeting = greeting => seperator => name => greeting + seperator + name;

const greeting = deeplyCurriedGreeting("Hello");

const seperator = greeting(" ");

const greetNiall = seperator("Niall");

const greetJohn = seperator("John");

console.log(greetNiall); //Hello Niall
console.log(greetJohn); //Hello John
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    This is an example of a deeply curried function that has more than one step. We can construct our gretting in multiple differant ways in a clean and reuseable way.
                    Next we will see a practical example of how curried functions can be used.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
                        `
/**
 * converts an input into any type of units
 * @param units
 */
const unitConverter =
    units =>
        factor =>
            offset =>
                input => ((input - offset) * factor) + units;

// curried functions can be done all at once
const remCalc = unitConverter("rem")(0.071428571)(0);
const emCalc = unitConverter("em")(0.071428571)(0);
const milesToKm = unitConverter(" miles")(1.60936)(0);

const tenPxToRem = remCalc(10);
const tenPxToEm = emCalc(10);
const twentyTwoMilesToKm = milesToKm(22);

console.log(tenPxToRem); //0.71428571rem
console.log(tenPxToEm); //0.71428571em
console.log(twentyTwoMilesToKm); //35.405919999999995 miles
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    02/02/2018
                </Block>
            </Block>
        )
    }
}

export default Currying;