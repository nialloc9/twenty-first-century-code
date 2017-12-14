import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import history from './history';

let middleware = [thunk, history];

//DEVELOPMENT ONLY
if (process.env.NODE_ENV === `development`) {

}

export default applyMiddleware(...middleware);