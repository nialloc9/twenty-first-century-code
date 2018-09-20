import { NPM_SET } from "../constants/npm";

// redux push 96 as of time of writing
// vcheck 56 as of time of writing
const initialState = {
  reduxPushDownloads: 0,
  reduxPushLoading: false,
  vcheckDownloads: 0,
  vcheckLoading: false
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
        ...payload
      };

    default:
      return state;
  }
};

export default npm;
