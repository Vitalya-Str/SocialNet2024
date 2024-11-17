import { addMessageAC, addNewMessageTextAC } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import React from "react";

const DialogsContainer = (props) => {
  const addMessage = () => {
    props.dispatch(addMessageAC());
  };
  const addNewMessage = (text) => {
    props.dispatch(addNewMessageTextAC(text));
  };

  return <Dialogs state={props.state} addMessage={addMessage} addNewMessage={addNewMessage} />;
};

export default DialogsContainer;
