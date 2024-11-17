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
  const stateCopy = { ...state };
  if (action.type === ADD_MESSAGE) {
    stateCopy.messages = [...state.messages];
    const message = { id: 3, message: stateCopy.newMessage };

    stateCopy.messages.push(message);
    stateCopy.newMessage = "";
    return stateCopy;
  } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
    stateCopy.newMessage = action.message;
    return stateCopy;
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
