import { NPM_SET } from '../constants/npm';

// 96 as of time of writing
const initialState = {
    reduxPushDownloads: 0
};

/**
 * @param state
 * @param type
 * @param payload
 * @returns {*}
 */
const npm = (state = initialState, { type, payload }) => {
    switch (type) {
        case NPM_SET:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
};

export default npm;