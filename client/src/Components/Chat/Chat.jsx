import React, { useState, useRef, useEffect } from "react";
import './Chat.css'
import { api } from "../../Services/api";

const Chat = ({ socket }) => {

    const [messageList, setMessageList] = useState([])
    const messageRef = useRef()

    useEffect(() => {
        const getAllMessages = async () => {
            try {
                const allMessages = await api.get('/')
               setMessageList(allMessages.data)
            } catch {
                console.log('Deu algo errado')
            }

        }

        getAllMessages()
    }, [])


    useEffect(() => {



        socket.on('returnData', (data) => {
            setMessageList((current) => [...current, data])

        })

        return () => socket.off('returnData')
    }, [socket])

    useEffect(() => {
        scrollToBottom();
    }, [messageList])

    const handleClickEnviarButton = () => {
        console.log(messageList)
        const message = messageRef.current.value
        if (!message.trim()) return

        socket.emit('message', message)
        clearInput()
        focusInput()
        scrollToBottom()
    }


    const clearInput = () => {
        messageRef.current.value = ''
    }
    const getEnterKey = (e) => {
        if (e.key === "Enter") {
            handleClickEnviarButton()
        }

    }
    const focusInput = () => {
        messageRef.current.focus()
    }

    function scrollToBottom() {
        var lastItem = document.querySelector('#lastItem');
        lastItem.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });

    }

    return (
        <>
            <div className="chat">
                <div className="chat-messages">                    {
                    messageList.map((message, index) => (
                        <div className="chat-message-ballon" style={
                            message.authorId !== socket.id ? {
                                backgroundColor: "#f5f5f5",
                                color: "#303030",
                                alignSelf: "flex-start"
                            } : {}
                        }
                            key={index}>
                            <h1 style={
                                message.authorId !== socket.id ? {
                                    textAlign: "left"
                                } : {}
                            }> {message.author} </h1>
                            <p> {message.message}</p>
                        </div>

                    ))
                }
                    <div id="lastItem"></div>
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