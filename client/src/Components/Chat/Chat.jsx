import React, { useState, useRef, useEffect } from "react";


const Chat = ({ socket }) => {

    const [messageList, setMessageList] = useState([])
    const messageRef = useRef()


    useEffect(() => {

         socket.on('returnData', (data) => {
            console.log(data)
        })

        return () => socket.off('returnData')
    }, [socket])

    const clearInput = () => {
        messageRef.current.value = ''
    }

    const handleClickEnviarButton = () => {
        const message = messageRef.current.value
        if (!message.trim()) return

        socket.emit('message', message)
        clearInput()
    }

    return (
        <>
            <h1>Chat</h1>
            <input type="text" ref={messageRef} placeholder="Mensagem" />
            <button onClick={handleClickEnviarButton}>Enviar</button>
        </>
    )
}

export default Chat