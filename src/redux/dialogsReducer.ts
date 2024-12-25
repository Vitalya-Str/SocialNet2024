const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";


type DialogType = {
    id: number | null
    name: string | null
}
type MessagesType = {
    id: number | null
    message: string | null
}


const initialState = {
    dialog: [
        {id: 1, name: "Vitalya"},
        {id: 2, name: "Julya"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "3daroVa"},
        {id: 2, message: "Oppps"},
    ] as Array<MessagesType>,
    newMessage: "",
};

type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionType): initialStateType => {
    if (action.type === ADD_MESSAGE) {
        const body = state.newMessage;
        return {
            ...state,
            messages: [...state.messages, {id: 3, message: body}],
            newMessage: "",
        };
    } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
        return {
            ...state,
            newMessage: action.message,
        };
    }
    return state;
};
type ActionType = any

type addNewMessageTextACType = {
    type: typeof ADD_NEW_MESSAGE_TEXT
    message: string
}
export const addNewMessageTextAC = (message: string): addNewMessageTextACType => {
    return {type: ADD_NEW_MESSAGE_TEXT, message};
};
type addMessageACType = {
    type: typeof ADD_MESSAGE
}
export const addMessageAC = (): addMessageACType => {
    return {type: ADD_MESSAGE};
};

export default dialogsReducer;
