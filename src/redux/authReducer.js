import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
        };
    }

    return state;
};

export const setUserDataAC = (email, id, login, isAuth) => ({type: SET_USER_DATA, data: {email, id, login, isAuth}});

export const authMe = () => {
    return async (dispatch) => {
        const data = await authAPI.authMe()
        if (data.resultCode === 0) {
            const {email, id, login} = data.data;
            dispatch(setUserDataAC(email, id, login, true));
        }
    };
}


export const Login = (email, password, rememberMe) => {
    return async (dispatch) => {
        authAPI.login(email, password, rememberMe).then((data) => {
            if (data.resultCode === 0) {
                dispatch(authMe());
            }
        });
    };
};

export const Logout = () => {
    return async (dispatch) => {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }
    };
};

export default authReducer;
