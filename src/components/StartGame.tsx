import { useMemoryStore } from '../store/memoryStore'

function StartGame() {
  const { settings, setSettings } = useMemoryStore()

  return (
    <>
      <div className="start">
        <h1>memory</h1>
        <div className="start__panel">
          <div className="start__label">Select Theme</div>
          <div className="start__container start__container--2col">
            <button
              onClick={() => setSettings('theme', 'numbers')}
              className={`button--menu ${
                settings.theme === 'numbers' ? 'selected' : null
              }`}
            >
              Numbers
            </button>
            <button
              onClick={() => setSettings('theme', 'icons')}
              className={`button--menu ${
                settings.theme === 'icons' ? 'selected' : null
              }`}
            >
              Icons
            </button>
          </div>
          <div className="start__label">Number of Players</div>
          <div className="start__container start__container--4col">
            <button
              onClick={() => setSettings('noOfPlayers', 1)}
              className={`button--menu ${
                settings.noOfPlayers === 1 ? 'selected' : null
              }`}
            >
              1
            </button>
            <button
              onClick={() => setSettings('noOfPlayers', 2)}
              className={`button--menu ${
                settings.noOfPlayers === 2 ? 'selected' : null
              }`}
            >
              2
            </button>
            <button
              onClick={() => setSettings('noOfPlayers', 3)}
              className={`button--menu ${
                settings.noOfPlayers === 3 ? 'selected' : null
              }`}
            >
              3
            </button>
            <button
              onClick={() => setSettings('noOfPlayers', 4)}
              className={`button--menu ${
                settings.noOfPlayers === 4 ? 'selected' : null
              }`}
            >
              4
            </button>
          </div>
          <div className="start__label">Grid Size</div>
          <div className="start__container start__container--2col">
            <button
              onClick={() => setSettings('gridSize', 4)}
              className={`button--menu ${
                settings.gridSize === 4 ? 'selected' : null
              }`}
            >
              4&#215;4
            </button>
            <button
              onClick={() => setSettings('gridSize', 6)}
              className={`button--menu ${
                settings.gridSize === 6 ? 'selected' : null
              }`}
            >
              6&#215;6
            </button>
          </div>
          <button className="button--menu-big">Start Game</button>
        </div>
      </div>
    </>
  )
}

export default StartGame
