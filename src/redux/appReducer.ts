import {authMe} from "./authReducer";

const SET_AUTORIZED = "SET_AUTORIZED";
export  type initialStateType = {
    autorized: boolean
}

const initialState: initialStateType = {
    autorized: false,
};

const appReducer = (state = initialState, action: ActionType): initialStateType => {
    if (action.type === SET_AUTORIZED) {
        return {
            ...state,
            autorized: true,
        };
    }

    return state;
};
type setAutorizedSuccesType = {
    type: typeof SET_AUTORIZED
}

type  ActionType = setAutorizedSuccesType
export const setAutorizedSucces = (): setAutorizedSuccesType => ({type: SET_AUTORIZED});

export const autorizedTh = () => (dispatch: any) => {
    let promise = dispatch(authMe());
    Promise.all([promise]).then(() => {
        dispatch(setAutorizedSucces());
    });
};

export default appReducer;
