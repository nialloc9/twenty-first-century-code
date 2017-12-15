import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import sidebar from './sidebar';
import java from './java';

export default combineReducers({
    sidebar,
    java,
    form: formReducer
});
