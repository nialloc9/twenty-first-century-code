import React from 'react'
import Article from '../Common/Article';
import Block from '../Common/Styled/Block';
import SoftLink from '../Common/Styled/SoftLink';
import Link from '../Common/Styled/Link';
import {remCalc, generateId} from '../../common/helpers';
import logo from '../../static/images/projects/reduxSaga/reduxSagaLogo.png';

const ReduxSagas = () => {
    const data = [
        {
            type: "header",
            src: logo,
            size: "large",
            alt: "Redux saga logo"
        },
        {
            type: "source",
            href: "https://github.com/nialloc9/redux-sagas-react-native"
        },
        {
            type: "paragraph",
            text: `Recently I decided to look at redux sagas. With a keen interest in redux it seemed only right that I should check out what
            all the hype around sagas is. So what is redux saga? Redux saga is a library created to handle the side effects in your redux app.
            It is a middleware that is added into our application. I am a big fan of using middleware in redux applications as it can be created
            away from the application and put in and taken out of the applications with ease.`
        },
        {
            type: "code",
            code: `
/**
 * fetches all users from the api endpoint
 * @param type
 * @param payload
 */
export function* fetchUsers({ type, payload }) {
    try {
        const users = yield call(fetch);

        yield put({type: USERS_FETCH_SUCCESS, payload: users});

    } catch ({ message }) {
        put({type: USERS_FETCH_ERROR, payload: {
            error: message
        }})
    }
}

/* take latest will only allow a single call to be made. Concurrent calls are stopped by only using the latest call. */
function* fetchUsersSaga() {
    yield takeLatest(USERS_FETCH_REQUESTED, fetchUsers);
}
            `
        },
        {
            type: "markup",
            markup: <Block key={generateId()} margin={`${remCalc(20)} 0`}>
                If you have read some of my previous articles and in particular my <SoftLink to="/javascript/generators">generators article</SoftLink> you
            will recognise the * next to our functions. Redux sagas harness the power of es6 generators to make aysncronous code easy to read, write, and test.
            It is fairly common advice to think of sagas as a seperate thread when learning about them. This is because I mentioned above the middleware works away from
            the main application.
            </Block>
        },
        {
            type: "paragraph",
            text: `The saga will 'yield' at our fetch. It will then pass the data back and be stored in the constant users. This is then passed to the redux-saga helper
            function put. Call is also a helper function. This will run the asyncrounos function passed to it and return the result. Put will dispatch an event to
            our store. As you can see it is wrapped in a try catch and if an error occurs dispatches an error to the store. Unde this function we can see the fetchUserSaga,
            this is our saga and in here we call our generator. We use the helper function takeLatest. In here we pass 2 arguements. The listener and the generator. The listener
            is the type that the saga will listen for in redux actions. If this is dispatched from an action then this saga will start.`
        },
        {
            type: "code",
            code: `
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import sagas from '../middleware/sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);
`
        },
        {
            type: "paragraph",
            text: `Now we have seen how to create a saga we will look at how to add it to our store. As mentioned it will be passed as middleware when creating the store.
            We pass our saga middleware into our middleware using createSagaMiddleware adn applyMiddleware. Then we run our sagas that we created above using the run
            method from redux-saga.`
        },
        {
            type: "markup",
            markup: <Block key={generateId()} margin={`${remCalc(20)} 0`}>
                 So, why use redux sagas? Well there are 3 main reasons. Readability, pure functions, and testability. First off, it is easier to read because it avoids callback hell that can occur when using redux thunks.
            The side effect function is pure because the call helper function does not call the api fetch function. Instead it returns an object that includes the type and function
            function to call, and arguements. This is then passed to the saga middleware that does the api call. This will then return the value to users constant from our yield. This
            makes it easier to test as we can call next on our generator and know what to expect at each yield. On the other hand if we used thunk we would need to mock the response
            of the api call using a package like {<Link target="_blank" href="https://www.npmjs.com/package/nock">nock</Link>}. We can see an example test that shows how clean and easy redux sagas
            are to test.
            </Block>
        },
        {
            type: "code",
            code: `
import { call, put } from 'redux-saga/effects';
import fetch from '../../../../api/users/fetch';
import { USERS_FETCH_SUCCESS } from '../../../../constants/users';
import { fetchUsers } from '../fetch';

describe("fetch test suite", () => {

    it('must call fetch', () => {

        const generator = fetchUsers({ type: "test", payload: {} });

        const testValue = generator.next().value;

        expect(testValue).toEqual(call(fetch))

        expect(generator.next().value)
            .toEqual(put({ type: USERS_FETCH_SUCCESS }));

        expect(generator.next())
            .toEqual({ done: true, value: undefined });
    });
});
        `
        },
        {
            type: "markup",
            markup: <Block key={generateId()} margin={`${remCalc(20)} 0`}>
                Redux sagas in conclusion provide a clean way of handling effects in your redux application. One of the issues it solves is callback hell. If you would like to know how to deal with
            callback hell when using promises click {<SoftLink to="/javascript/higher-order-functions">higher order functions</SoftLink>}.
            </Block>
        },
        {
            type: "published",
            date: `16/02/2018`
        },
    ]

    return <Article data={data} />
}

export default ReduxSagas;