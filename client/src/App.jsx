import { useState } from 'react'
import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Join />
      <Chat />
    </>
  )
}

export default App
