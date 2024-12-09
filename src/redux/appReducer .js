import { authMe } from "./authReducer";

const SET_AUTORIZED = "SET_AUTORIZED";

const initialState = {
  autorized: false,
};

const appReducer = (state = initialState, action) => {
  if (action.type === SET_AUTORIZED) {
    return {
      ...state,
      autorized: true,
    };
  }

  return state;
};

export const setAutorizedSucces = () => ({ type: SET_AUTORIZED });

export const autorizedTh = () => (dispatch) => {
  let promise = dispatch(authMe());
  Promise.all([promise]).then(() => {
    dispatch(setAutorizedSucces());
  });
};

export default appReducer;
