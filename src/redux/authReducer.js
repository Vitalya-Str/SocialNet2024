import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = '/authReducer/SET_CAPTCHA_URL'

const initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    if (action.type === SET_USER_DATA) {
        return {
            ...state, ...action.data,
        };
    } else if (action.type === SET_CAPTCHA_URL) {
        return {
            ...state,
            captchaUrl: action.captchaUrl
        }
    }

    return state;
};

export const setUserDataAC = (email, id, login, isAuth) => ({type: SET_USER_DATA, data: {email, id, login, isAuth}});
export const captchaUrlAC = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})

export const authMe = () => {
    return async (dispatch) => {
        const data = await authAPI.authMe()
        if (data.resultCode === 0) {
            const {email, id, login} = data.data;
            dispatch(setUserDataAC(email, id, login, true));
        }
    };
}


export const Login = (values) => {
    const {email, password, rememberMe, captcha} = {...values}
    return async (dispatch) => {
        await authAPI.login(email, password, rememberMe, captcha).then((data) => {
            if (data.resultCode === 0) {
                dispatch(authMe());
            } else if (data.resultCode === 10) {
                dispatch(captchaUrlThunk())
            }
        });
    };
};

export const captchaUrlThunk = (captcha) => {
    return async (dispatch) => {
        const data = await securityAPI.captchaUrl()
        dispatch(captchaUrlAC(data.url))
    }
}

export const Logout = () => {
    return async (dispatch) => {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }
    };
};

export default authReducer;
