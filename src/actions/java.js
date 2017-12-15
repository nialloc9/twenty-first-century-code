import { JAVA_SET } from '../constants/java';

/**
 * decides which java project to open
 */
export const setJavaOpen  = open => (dispatch, getState) => {
    dispatch({
        type: JAVA_SET,
        payload: {
            open
        }
    })
};