import { useEffect } from 'react'
import './App.css'

import { useMemoryStore } from './store/memoryStore'
import Settings from './components/Settings'
import StartGame from './components/StartGame'

function App() {
  const { settings, gameActive } = useMemoryStore()

  useEffect(() => {
    console.log('settings: ', settings)
  }, [settings])

  useEffect(() => {
    console.log('gameActive: ', gameActive)
  }, [gameActive])

  return <>{gameActive ? <StartGame /> : <Settings />}</>
}

export default App
