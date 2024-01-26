import React from "react";
import { useRef } from "react";
import { io } from "socket.io-client";

const Join = ( {setChatVisibility}) =>{

    const usernameRef  = useRef()
    
    const handleClickEntrarButton = async () =>{
        const username = usernameRef.current.value
        if(!username.trim()) return
        const socket = await io.connect("http://localhost:3001")

        socket.emit("set_username", username)
        
        setChatVisibility(true)
    }

    return(
        <>
            <h1>Join</h1>
            <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
            <button onClick={handleClickEntrarButton}>Entrar</button>
        </>
    )
}

export default Join