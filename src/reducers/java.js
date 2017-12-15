import { JAVA_OVERVIEW, JAVA_SET } from '../constants/java';

const initialState = {
    open: JAVA_OVERVIEW
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const java = (state = initialState, { type, payload }) => {
    switch (type) {
        case JAVA_SET:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};

export default java;