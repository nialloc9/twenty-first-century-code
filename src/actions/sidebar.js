import { SIDEBAR_SET } from '../constants/sidebar';

/**
 * opens and closes the side bar using sidebar open state
 */
export const setSidebarOpen  = () => (dispatch, getState) => {

    const { sidebar: { open } } = getState();

    dispatch({
        type: SIDEBAR_SET,
        payload: {
            open: !open
        }
    })
};