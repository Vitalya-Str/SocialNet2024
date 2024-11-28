const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    debugger;
    return {
      ...state,
      ...action.data,
      isAuth: true,
    };
  }

  return state;
};

export const setUserDataAC = (email, id, login) => ({ type: SET_USER_DATA, data: { email, id, login } });

export default authReducer;
