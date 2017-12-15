import { SIDEBAR_SET } from '../constants/sidebar';

const initialState = {
    open: false
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