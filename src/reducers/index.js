import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { reducer as formReducer } from "redux-form";
import sidebar from './sidebar';
import github from './github';
import npm from './npm';

export default history => combineReducers({
    router: connectRouter(history),
    sidebar,
    github,
    npm,
    form: formReducer
});
