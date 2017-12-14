import { SIDEBAR_SET } from '../constants/sidebar';

/**
 * sets the sidebar selected state
 * @param selected
 */
export const setSidebarSelected  = selected => dispatch => {
    dispatch({
        type: SIDEBAR_SET,
        payload: {
            selected
        }
    })
};

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