import { authMe } from "./authReducer";

const SET_UTORIZED = "SET_UTORIZED";

const initialState = {
  autorized: false,
};

const appReducer = (state = initialState, action) => {
  if (action.type === SET_UTORIZED) {
    return {
      ...state,
      autorized: true,
    };
  }

  return state;
};

export const setAutorizedSucces = () => ({ type: SET_UTORIZED });

export const autorizedTh = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => {
    dispatch(setAutorizedSucces());
  });
};

export default appReducer;
