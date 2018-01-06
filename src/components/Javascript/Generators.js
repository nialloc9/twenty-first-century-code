import React, { PureComponent } from 'react'
import Block from '../Common/Styled/Block';
import CodeBlock from '../Common/Styled/CodeBlock';
import Image from '../Common/Styled/Image';
import SoftLink from '../Common/Styled/SoftLink';
import generator from '../../static/images/projects/generators/generator.jpg';
import theme from '../../config/theme';
import { remCalc } from '../../common/helpers';

const { colors: { fontColor }, fontSize, lineHeight } = theme;

class Generators extends PureComponent{

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
                        src={generator}
                        margin="auto"
                        size="large"
                        alt="List maker start"
                    />
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Source code: <a target="_blank" href="https://github.com/nialloc9/generatorExamples">GitHub</a>
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    Normally in javascript when a function starts it will run until completion. With ES6 in javascript we now have a new kind of function that can pause and
                    start again several times. This allows us to run other code while it is paused. Generators in javascript are cooperative in that they choose when to start and
                    pause. The only thing that will pause a generator will be the keyword yeild inside of the function itself. The syntax for creating a generator can be seen below:
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
`
function *myFunc (){
    // code here
}
`
                    }
                </CodeBlock>

                <Block>
                    Take not of the asterix(*) before the function name. This denotes that this function is a generator. A generator looks and works like a regular function except
                    it can also make use of the yield keyword inside of itself. This yield allows us to pause the function and return a value.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
                        `
function *myFunc (){
    console.log("step one");
    yield "from myFunc";

    console.log("step two");
    yield "from myFunc";
}
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Generators can be started and stopped using the next function. This will continue to the next yield before returning the value yielded. Or in the case below it will return
                    undefined for the value. That is because we never yielded any value. It will actually return an abject with 2 attributes value and done. done tells us whether the function has
                    finished. If it has run all of it's code done will be true.
                </Block>

                <CodeBlock margin={`${remCalc(20)} 0`}>
                    {
                        `
const multiplierGenerator = function* (number) {

    let multiplier = 10;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
    yield;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
    yield;

    console.log(number * multiplier);
    multiplier = multiplier * 10;
};

const multiplier = multiplierGenerator(10);

multiplier.next(); // 10
multiplier.next(); // 100
multiplier.next(); // 1000
`
                    }
                </CodeBlock>

                <Block margin={`${remCalc(20)} 0`}>
                    Generators can be used to create asyncronous code that allows the developer to stop and start when needed. This can especially useful when combined with promises.
                    However, ES7 has a proposal for <SoftLink to="node/async-await">async/await</SoftLink> that is already supported in node which is easier to understand and much cleaner.
                </Block>

                <Block margin={`${remCalc(20)} 0`}>
                    06/01/2018
                </Block>
            </Block>
        )
    }
}

export default Generators;