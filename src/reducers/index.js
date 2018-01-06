import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import sidebar from './sidebar';
import github from './github';
import npm from './npm';

export default combineReducers({
    sidebar,
    github,
    npm,
    form: formReducer
});
