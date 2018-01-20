import globals from '../config/globals';
import { NPM_SET } from '../constants/npm';
import promiseErrorHandler from '../common/promiseErrorHandler';

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

    const [error, response] = await promiseErrorHandler(fetch(`${NPM_API}/downloads/point/last-year/redux-push`, {
        method: "GET"
    }));

    if(error || !response.ok){
        dispatch(setReduxPushLoading(false));
    }

    const [jsonError, json] = await promiseErrorHandler(response.json());

    if(jsonError){
        dispatch(setReduxPushLoading(false));
    }

    const { downloads } = json;

    return dispatch({
        type: NPM_SET,
        payload: {
            reduxPushDownloads: downloads,
            reduxPushLoading: false
        }
    })
};