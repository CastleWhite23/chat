import React, { useState, useRef, useEffect } from "react";
import './Chat.css'

const Chat = ({ socket }) => {

    const [messageList, setMessageList] = useState([])
    const messageRef = useRef()


    useEffect(() => {

        socket.on('returnData', (data) => {

            setMessageList((current) => [...current, data])

        })

        return () => socket.off('returnData')
    }, [socket])

    const clearInput = () => {
        messageRef.current.value = ''
    }

    const handleClickEnviarButton = () => {
        console.log(messageList)
        const message = messageRef.current.value
        if (!message.trim()) return

        socket.emit('message', message)
        clearInput()
    }

    return (
        <>
            <div className="chat">
                <div className="chat-messages">
                    {
                        messageList.map((message) => (
                            <>
                                <h1> {message.author} </h1>
                                <p> {message.message}</p>
                            </>

                        ))
                    }
                </div>
                <div className="chat-input">
                    <input type="text" ref={messageRef} placeholder="Mensagem" />
                    <button onClick={handleClickEnviarButton}>Enviar</button>
                </div>
            </div>

        </>
    )
}

export default Chat