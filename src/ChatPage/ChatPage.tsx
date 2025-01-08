import {Button} from "antd";
import {FC, useEffect, useState} from "react";

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type MessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

export const ChatPage = () => {

    return <div>
        <Chat/>
    </div>
}

const Chat = () => {
    return <div>
        <Messages/>
        <ChatInput/>
    </div>
}

const Messages = () => {
    const [message, setMessages] = useState<MessageType[]>([])

    useEffect(() => {

        wsChannel.addEventListener('message', (e) => {
            let newMessage = JSON.parse(e.data)

            setMessages((prevMessages) => [...prevMessages, ...newMessage])
        })
    }, [])

    return <div>
        {message.map((m, index) => <Message key={index} message={m}/>)}
    </div>
}

const Message: FC<any> = ({message}): any => {
    return <div>
        <div><img src={message.photo} alt="ava"/></div>
        <div><b>{message.userName}</b></div>
        <div>{message.message}</div>
        <hr/>
    </div>
}

const ChatInput = () => {
    const [message, setMassage] = useState('')
    const sendMessage = () => {
        if (!message) {
            return
        }

        wsChannel.send(message)
        setMassage('')
    }

    return <div>
        <div><textarea onChange={(e) => setMassage(e.currentTarget.value)} value={message}></textarea></div>
        <div><Button onClick={sendMessage}>Send</Button></div>
    </div>
}