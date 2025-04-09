import { useEffect } from 'react'
import './App.css'

import { useMemoryStore } from './store/memoryStore'
// import Settings from './components/Settings'
import StartGame from './components/StartGame'

function App() {
  const { settings } = useMemoryStore()

  useEffect(() => {
    console.log('settings: ', settings)
  }, [settings])

  return (
    <>
      {/* <Settings /> */}
      <StartGame />
    </>
  )
}

export default App
