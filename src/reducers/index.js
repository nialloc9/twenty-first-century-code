import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import sidebar from './sidebar';

export default combineReducers({
    sidebar,
    form: formReducer
});
