import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import history from './history';

let middleware = [thunk, history];

//DEVELOPMENT ONLY
if (process.env.NODE_ENV === `development`) {

}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancer(applyMiddleware(...middleware));