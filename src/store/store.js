import { createStore } from "redux";
import middleware from '../middleware/index';
import reducers from '../reducers';

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);

export default store;