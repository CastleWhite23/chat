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

    const handleClickEnviarButton = () => {
        console.log(messageList)
        const message = messageRef.current.value
        if (!message.trim()) return

        socket.emit('message', message)
        clearInput()
    }


    const clearInput = () => {
        messageRef.current.value = ''
    }
    const getEnterKey = (e) => {
        if (e.key === "Enter"){
            handleClickEnviarButton()
        }
            
    }
    const focusInput = () =>{
        messageRef.current.focus()
    }

    return (
        <>
            <div className="chat">
                <div className="chat-messages">
                    {
                        messageList.map((message, index) => (
                            <div className="chat-message-ballon" key={index}>
                                <h1> {message.author} </h1>
                                <p> {message.message}</p>
                            </div>

                        ))
                    }
                </div>
                <div className="chat-input" onKeyUp={getEnterKey}>
                    <input type="text" ref={messageRef} placeholder="Mensagem" />
                    <button onClick={handleClickEnviarButton} >Enviar</button>
                </div>
            </div>

        </>
    )
}

export default Chat