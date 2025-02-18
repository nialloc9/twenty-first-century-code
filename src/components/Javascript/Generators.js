import React from 'react'
import Article from '../Common/Article';
import {Block, SoftLink} from '../Common/Styled';
import generator from '../../static/images/projects/generators/generator.jpg';
import { remCalc } from '../../common/utils';

export default () => {

    const head = {
        title: "generators in javascript",
        meta: [
          {
            name: 'description',
            content: 'learn how to create a generators in javascript'
          },
          {
            name: 'keywords',
            content: 'generators, javascript'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: generator,
            alt: 'Factory image'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/generatorExamples'
        },
        {
            type: 'paragraph',
            text: `Normally in javascript when a function starts it will run until completion. With ES6 in javascript we now have a new kind of function that can pause and
            start again several times. This allows us to run other code while it is paused. Generators in javascript are cooperative in that they choose when to start and
            pause. The only thing that will pause a generator will be the keyword yeild inside of the function itself. The syntax for creating a generator can be seen below:`
        },
        {
            type: 'code',
            code: `
function *myFunc (){
    // code here
}
            `
        },
        {
            type: 'paragraph',
            text: `Take not of the asterix(*) before the function name. This denotes that this function is a generator. A generator looks and works like a regular function except
            it can also make use of the yield keyword inside of itself. This yield allows us to pause the function and return a value.`
        },
        {
            type: 'code',
            code: `
function *myFunc (){
    console.log("step one");
    yield "from myFunc";

    console.log("step two");
    yield "from myFunc";
}
            `
        },
        {
            type: 'paragraph',
            text: `Generators can be started and stopped using the next function. This will continue to the next yield before returning the value yielded. Or in the case below it will return
            undefined for the value. That is because we never yielded any value. It will actually return an abject with 2 attributes value and done. done tells us whether the function has
            finished. If it has run all of it's code done will be true.`
        },
        {
            type: 'code',
            code: `
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
        },
        {
            type: 'paragraph',
            text: `Generators can be used to create asyncronous code that allows the developer to stop and start when needed. This can especially useful when combined with promises. Below we can see
            an example of using generators with promises.`
        },
        {
            type: 'code',
            code: `
            import request from './common/request';

/**
 * makes an ajax request
 * @param url
 * @param params
 */
const ajaxCall = (url, params) => {
    request({url, params, callback: (jsonResponse) => {
        if(jsonResponse){
            generator.next(jsonResponse);
        }
    }})
};

/**
 * a generator that makes ajax requests.
 */
function *fetchGenerator (){

    // get data from github
    const response1 = yield ajaxCall("https://api.github.com/users/nialloc9", { method: "GET" });

    // below code will only be called if the above ajax request returns data. This check is handled in ajaxCall
    const { public_repos }  = response1;

    const response2 = yield ajaxCall( "https://api.npmjs.org/downloads/point/last-year/redux-push", { method: "GET" });

    const { downloads } = response2;

    console.log("Niall has " + public_repos +  " repos on github and his package redux-push has " + downloads + " downloads in the last year.");
}

const generator = fetchGenerator();

export default () => {
    generator.next();
};
            `
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            Above we can see 3 functions. The first is a a helper function called request that is imported from a file in the common directory.
            This is just a helper function that will do an ajax request. The second, ajaxCall is a function that calls the request function. Look closely at what it does
            in it's callback function. It calls generator.next with a jsonResponse only if there is a response returned. If no response is returned it will not continue to the
            next yield in the generator. This can be used for when one ajax call is dependant on anothers response. If there was no response returned in the first it would cause
            an error in the second. In case your wondering hoisting in javascript allows us to use generator even though it is actually defined below. Now, let's look inside the fetch generator.
            First, we try to retrieve data from the github api. Crucially, we are using ajaxCall instead of a direct
            ajax request. Remember, this will check the response and decide whether to continue to the next yield. If no response is returned it will finish here and not continue. If there is a
            valid reponse we now call the npm api and then output a message using a combination of data from each. Generators are really powerful and allow us to do really cool things.
            Read about another awesome feature async/await <SoftLink to="/javascript/async-await">here</SoftLink>.
            </Block>
        },
        {
            type: 'published',
            date: `06/01/2018`
        },
    ];

    return <Article head={head} data={data} />;
};