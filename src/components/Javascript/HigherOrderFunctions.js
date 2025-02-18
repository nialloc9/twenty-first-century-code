import React from 'react'
import Article from '../Common/Article';
import {Block, SoftLink} from '../Common/Styled';
import hands from '../../static/images/projects/higherOrderFunctions/hands-1438638-1280x960.jpg';
import { remCalc } from '../../common/utils';

export default () => {

    const head = {
        title: "higher order functions in javascript",
        meta: [
          {
            name: 'description',
            content: 'learn how to create higher order functions in javascript'
          },
          {
            name: 'keywords',
            content: 'higher order functions, hof, javascript'
          }
        ]
      };

    const data = [
        {
            type: "image",
            src: hands,
            alt: 'Helping hands image'
        },
        {
            type: 'source',
            href: 'https://github.com/nialloc9/higher-order-functions'
        },
        {
            type: 'paragraph',
            text: `In javascript functions are of type function object an treated as first class citizens. This means tha they can be assigned to a variable and
            passed around. This is a very powerful feature and lends itself to functional programming very well. First we must defined what a higher order function.
            Put simply a higher order function is a function that either takes a function as an arguement or returns a function. We will see below examples of higher order
            functions being used.`
        },
        {
            type: 'code',
            code: `
/**
* higher order function that passes Hello to function passed in
* @param {object} myFunction - the function to be called
*/
const withGreeting = myFunction => myFunction("Hello");

/**
* logs greeting to console
* @param greeting
*/
const testFunction = greeting => {
    console.log(greeting);
};

/** will call the withGreeting higher order function and then call testFunction with greeting from hof **/
withGreeting(testFunction); // Hello
`
        },
        {
            type: 'paragraph',
            text: `Above we can see a simple higher order function withGreeting. It takes in a function as an arguement and calls it with a paramater of Hello.
            This is very simple. Any function passed in will be called with arguement hello. Now let's look at some more useful examples.`
        },
        {
            type: 'code',
            code: `
/**
 * checks whether a value has been passed
 * @param {*} value - the value to be passed
 * @param {string} message - the message to display
 * @param {object} test - the test handler function
 * @returns {*}
 */
const required = ({ value, message, test }) => {
    const result = value ? null : message;

    return test(result);
};

/**
 * handles required values
 * @param {string} errorMessage - the errorMessage to display
 */
const handleRequiredValue = errorMessage => {
    if(errorMessage){
        console.log("ERROR: " + errorMessage);
    }
};

required({ value: "niall", message: "Name is required", test: handleRequiredValue }); //
required({ value: name, message: "Age is required", test: handleRequiredValue }); // Age is required
            `
        },
        {
            type: 'markup',
            markup: <Block margin={`${remCalc(20)} 0`}>
            Above we can use a higher order function to reduce the amount of code needed for validation. This is a common scenario whereby we want to check
            if a vaue is present and if not return an error message. Instead of writing a function to check each time we can create a higher order function
            required. We can then pass in a value, message, and function that will be called with the message provided if the value is null. Awesome, we have just
            reduced the amount of code for form validation substantially and it is totally reusable. The next example is to a bit more complicated and requires you to
            understand <SoftLink to="/javascript/async-await">async/await</SoftLink>. It is an example of handling errors in asyncrounous functions using a higher order component.
            See async await makes your code so much cleaner but then too often developers wrap it in a ugly try catch. Instead of this I like to use a higher order function to
            handle errors.
            </Block>
        },
        {
            type: 'code',
            code: `
/**
 * handles errors in async functions
 * @param promise
 * returns an array. first item is an error second is the result
 */
const asyncErrorHandler = promise => promise.then(data => [null, data]).catch(err => [err]);

/**
 * successfully resolves with data
 * @type {Promise} - the promise
 */
const fetchReturnData = new Promise((resolve, reject) => resolve({ data: [1, 2] }));

/**
 * rejects promise with error
 * @type {Promise} - the promise
 */
const fetchReturnError = new Promise((resolve, reject) => reject({ message: "error" }));

/**
 * fetches all data using fetches from above
 * @returns {Promise.<void>}
 */
const fetchAllData = async () => {

    // no need for a try catch
    const success = await asyncErrorHandler(fetchReturnData);
    const error = await asyncErrorHandler(fetchReturnError);

    console.log(success); // [null, { data: [ 1, 2 ] }
    console.log(error); // [{ messsage: "error" }, null ]
};

fetchAllData(); 
            `
        },
        {
            type: 'paragraph',
            text: `See how clean that is. The higher order function calls then and returns an array with 2 arguements. The first being an error and the seconde the
            resoonse. This makes it so much cleaner and readable and all we need to do is wrap our fetches with our asyncErrorHandler HOF.`
        },
        {
            type: 'published',
            date: `09/02/2018`
        },
    ];

    return <Article head={head} data={data} />;
};