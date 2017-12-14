import { SIDEBAR_SET, SIDEBAR_HOME } from '../constants/sidebar';

const initialState = {
    open: false,
    selected: SIDEBAR_HOME
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const sidebar = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIDEBAR_SET:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};

export default sidebar;