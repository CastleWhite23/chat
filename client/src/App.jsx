import { useState } from 'react'
import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'
import './App.css'

function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] =  useState(null)

  return (
    <>
    {
        chatVisibility ? <Chat setSocket={setSocket} /> : <Join setChatVisibility={setChatVisibility}/>
    }
    </>
  )
}

export default App
