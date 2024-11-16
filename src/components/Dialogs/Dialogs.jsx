import { addMessageAC, addNewMessageTextAC } from "../../redux/state";
import Dialog from "./Dialog/Dialog";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  const dialogsElement = props.state.dialog.map((d) => <Dialog key={d.id} id={d.id} name={d.name} />);
  const messageElemnt = props.state.messages.map((m) => <Message key={m.id} id={m.id} message={m.message} />);

  const newMessageElement = React.createRef();
  const addMessage = () => {
    props.dispatch(addMessageAC());
  };
  const addNewMessage = () => {
    const text = newMessageElement.current.value;
    props.dispatch(addNewMessageTextAC(text));
  };

  return (
    <div className={s.container}>
      <div className={s.dialogsItem}>{dialogsElement}</div>
      <div className={s.messageItem}>{messageElemnt}</div>
      <div>
        <div className={s.text}>
          <textarea onChange={addNewMessage} ref={newMessageElement} value={props.state.newMessage} />
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
