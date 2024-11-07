import Dialog from "./Dialog/Dialog"
import s from "./Dialogs.module.css"
import Message from "./Message/Message"


const Dialogs = (props) => {

    return (
        <div className= {s.container}>
            <div className={s.dialogsItem}>
                <Dialog name='Vitalya' id='1' />
                <Dialog name='Julya' id='2' />
                <Dialog name='Artem' id='3' />
            </div>
            <div className={s.messageItem} >
                <Message message = 'hi'/>
                <Message message = 'Yo!'/>
                <Message message = 'No!'/>
            </div>

        </div>
    )
}

export default Dialogs