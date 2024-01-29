import React from "react";
import { useRef } from "react";
import { io } from "socket.io-client";

const Join = ( {setChatVisibility, setSocket}) =>{

    const usernameRef  = useRef()
    
    const handleClickEntrarButton = async () =>{
        const username = usernameRef.current.value
        if(!username.trim()) return
        const socket = await io.connect("http://localhost:3001")

        socket.emit("set_username", username)
        setSocket(socket)
        setChatVisibility(true)
    }

    const getEnterKey = (e) => {
        if (e.key === "Enter") {
            handleClickEntrarButton()
        }

    }
    return(
        <>
            <h1>Join</h1>
            <input type="text" ref={usernameRef} onKeyUp={getEnterKey} placeholder="Nome de usuário"  />
            <button onClick={handleClickEntrarButton}  >Entrar</button>
        </>
    )
}

export default Join