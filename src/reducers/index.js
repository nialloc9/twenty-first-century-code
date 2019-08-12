import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import sidebar from './sidebar';
import github from './github';
import npm from './npm';

export default history => combineReducers({
    router: connectRouter(history),
    sidebar,
    github,
    npm
});
