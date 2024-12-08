const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";

const initialState = {
  dialog: [
    { id: 1, name: "Vitalya" },
    { id: 2, name: "Julya" },
  ],
  messages: [
    { id: 1, message: "3daroVa" },
    { id: 2, message: "Oppps" },
  ],
  newMessage: "",
};

const dialogsReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    const body = state.newMessage;

    return {
      ...state,
      messages: [...state.messages, { id: 3, message: body }],
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

export const addNewMessageTextAC = (message) => {
  return { type: ADD_NEW_MESSAGE_TEXT, message };
};

export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};

export default dialogsReducer;
