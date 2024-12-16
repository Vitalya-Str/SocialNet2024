import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = '/authReducer/SET_CAPTCHA_URL'


const initialState = {
    email: null as string | null,
    id: null as number | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any):InitialStateType  => {
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
type DataType = {
    email: string | null
    id: number | null
    login: string | null
    isAuth: boolean
}
type setUserDataACType = {
    type: typeof SET_USER_DATA
    data: DataType
}
export const setUserDataAC = (email: string | null, id: number | null, login: string | null, isAuth: boolean): setUserDataACType => ({
    type: SET_USER_DATA,
    data: {email, id, login, isAuth}
});
type captchaUrlACType = {
    type: typeof SET_CAPTCHA_URL
    captchaUrl: string
}
export const captchaUrlAC = (captchaUrl: string): captchaUrlACType => ({type: SET_CAPTCHA_URL, captchaUrl})

export const authMe = () => {
    return async (dispatch: any) => {
        const data = await authAPI.authMe()
        if (data.resultCode === 0) {
            const {email, id, login} = data.data;
            dispatch(setUserDataAC(email, id, login, true));
        }
    };
}

type loginType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
export const Login = (values:loginType) => {
    const {email, password, rememberMe, captcha} = {...values}
    return async (dispatch: any) => {
        await authAPI.login(email, password, rememberMe, captcha).then((data) => {
            if (data.resultCode === 0) {
                dispatch(authMe());
            } else if (data.resultCode === 10) {
                dispatch(captchaUrlThunk())
            }
        });
    };
};

export const captchaUrlThunk = () => {
    return async (dispatch: any) => {
        const data = await securityAPI.captchaUrl()
        dispatch(captchaUrlAC(data.url))
    }
}

export const Logout = () => {
    return async (dispatch: any) => {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false));
        }
    };
};

export default authReducer;
