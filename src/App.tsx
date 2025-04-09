import { useEffect } from 'react'
import './App.css'
import StartGame from './components/StartGame'

import { useMemoryStore } from './store/memoryStore'

function App() {
  const { settings } = useMemoryStore()

  useEffect(() => {
    console.log('settings: ', settings)
  }, [settings])

  return (
    <>
      <StartGame />
    </>
  )
}

export default App
