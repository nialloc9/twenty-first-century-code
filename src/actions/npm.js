import globals from '../config/globals';
import { NPM_SET } from '../constants/npm';

const { NPM_API } = globals;

/**
 * sets the reduxPushLoading state
 * @param reduxPushLoading
 */
const setReduxPushLoading = reduxPushLoading => ({
    type: NPM_SET,
    payload: {
        reduxPushLoading
    }
});

/**
 * sets the reduxPushDownloads state for redux push
 */
export const setReduxPushDetails = () => async dispatch => {

    dispatch(setReduxPushLoading(true));

    const response = await fetch(`${NPM_API}/downloads/point/last-year/redux-push`, {
        method: "GET"
    });

    if(!response.ok){
        dispatch(setReduxPushLoading(false));
        return new Error("Am error has occured fetching github data");
    }

    const json = await response.json();

    const { downloads } = json;

    return dispatch({
        type: NPM_SET,
        payload: {
            reduxPushDownloads: downloads,
            reduxPushLoading: false
        }
    })
};