import React from "react";
import { useRef } from "react";
const Join = ( {setChatVisibility}) =>{

    const usernameRef  = useRef()
    
    const handleClickEntrarButton = () =>{
        const username = usernameRef.current.value
        if(!username.trim()) return
        
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