import { useEffect } from 'react'
import './App.css'

import { useMemoryStore } from './store/memoryStore'
import Settings from './components/Settings'
import StartGame from './components/StartGame'

function App() {
  const { settings, gameActive, board } = useMemoryStore()

  useEffect(() => {
    console.log('settings: ', settings)
  }, [settings])

  useEffect(() => {
    console.log('gameActive: ', gameActive)
  }, [gameActive])

  useEffect(() => {
    console.log('board: ', board)
  }, [board])

  return <>{gameActive ? <StartGame /> : <Settings />}</>
}

export default App
