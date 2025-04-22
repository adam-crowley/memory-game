import { useMemoryStore } from '../store/memoryStore'
import shuffle from '../utilities/shuffle.ts'

function Settings() {
  const { settings, setSettings, setGameActive, setBoard } = useMemoryStore()

  const handleClick = () => {
    const noOfPieces = settings.gridSize * settings.gridSize
    if (settings.theme === 'numbers') {
      const pieces = []
      for (let i = 1; i <= noOfPieces / 2; i++) {
        pieces.push(i, i)
      }
      setBoard(shuffle(pieces))
    }
    setGameActive()
  }

  return (
    <>
      <div className="settings">
        <h1>memory</h1>
        <div className="settings__panel">
          <div className="settings__label">Select Theme</div>
          <div className="settings__container settings__container--2col">
            <button
              onClick={() => setSettings('theme', 'numbers')}
              className={`button button--menu ${
                settings.theme === 'numbers' ? 'selected' : null
              }`}
            >
              Numbers
            </button>
            <button
              onClick={() => setSettings('theme', 'icons')}
              className={`button button--menu ${
                settings.theme === 'icons' ? 'selected' : null
              }`}
            >
              Icons
            </button>
          </div>
          <div className="settings__label">Number of Players</div>
          <div className="settings__container settings__container--4col">
            <button
              onClick={() => setSettings('noOfPlayers', 1)}
              className={`button button--menu ${
                settings.noOfPlayers === 1 ? 'selected' : null
              }`}
            >
              1
            </button>
            <button
              onClick={() => setSettings('noOfPlayers', 2)}
              className={`button button--menu ${
                settings.noOfPlayers === 2 ? 'selected' : null
              }`}
            >
              2
            </button>
            <button
              onClick={() => setSettings('noOfPlayers', 3)}
              className={`button button--menu ${
                settings.noOfPlayers === 3 ? 'selected' : null
              }`}
            >
              3
            </button>
            <button
              onClick={() => setSettings('noOfPlayers', 4)}
              className={`button button--menu ${
                settings.noOfPlayers === 4 ? 'selected' : null
              }`}
            >
              4
            </button>
          </div>
          <div className="settings__label">Grid Size</div>
          <div className="settings__container settings__container--2col">
            <button
              onClick={() => setSettings('gridSize', 4)}
              className={`button button--menu ${
                settings.gridSize === 4 ? 'selected' : null
              }`}
            >
              4&#215;4
            </button>
            <button
              onClick={() => setSettings('gridSize', 6)}
              className={`button button--menu ${
                settings.gridSize === 6 ? 'selected' : null
              }`}
            >
              6&#215;6
            </button>
          </div>
          <button
            onClick={() => handleClick()}
            className="button button--menu-big"
          >
            Start Game
          </button>
        </div>
      </div>
    </>
  )
}

export default Settings
