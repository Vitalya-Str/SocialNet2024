const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";

const dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    const message = { id: 3, message: state.newMessage };

    state.messages.push(message);

    state.newMessage = "";
  } else if (action.type === ADD_NEW_MESSAGE_TEXT) {
    state.newMessage = action.message;
  }
  return state;
};

export default dialogsReducer;
