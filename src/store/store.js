import { createStore } from "redux";
import middleware from '../middleware/index';
import createRootReducer from '../reducers';
import { history } from "../middleware/history"

const store = preloadedState => createStore(
    createRootReducer(history),
    preloadedState,
    middleware
)

export default store;