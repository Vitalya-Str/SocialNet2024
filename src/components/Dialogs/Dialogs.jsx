import Dialog from "./Dialog/Dialog"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"


const Dialogs = (props) => {

    const dialogsElement = props.state.dialog.map(d => <Dialog key={d.id} id={d.id} name={d.name} />)
    const messageElemnt = props.state.messages.map(m => <Message key={m.id} id={m.id} message={m.message} />)

    return (
        <div className={s.container}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messageItem} >
                {messageElemnt}
            </div>

        </div>
    )
}

export default Dialogs