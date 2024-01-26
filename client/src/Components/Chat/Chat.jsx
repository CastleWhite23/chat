import React from "react";
import { useRef } from "react";

const Chat = ({ socket }) => {

    const messageRef = useRef()

    const handleClickEnviarButton = () => {

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