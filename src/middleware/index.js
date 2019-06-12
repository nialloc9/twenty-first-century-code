import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger'
import history from './history';

let middleware = [thunk, history];

//DEVELOPMENT ONLY
if (process.env.NODE_ENV !== `production`) {
    middleware.push(createLogger({
        collapsed: true
    }))
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancer(applyMiddleware(...middleware));