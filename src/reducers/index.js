import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import sidebar from './sidebar';
import github from './github';

export default combineReducers({
    sidebar,
    github,
    form: formReducer
});
