import { useEffect } from 'react'
import { useMemoryStore } from '../store/memoryStore'

function StartGame() {
  const { settings, setGameActive, board, updateBoardItem } = useMemoryStore()

  const clickHandler = (boardItem: number, index: number) => {
    updateBoardItem(index, { isSelected: true })
  }

  useEffect(() => {
    document.body.style.backgroundColor = '#fcfcfc'
  }, [])

  return (
    <>
      <div className="start">
        <header className="start__header">
          <h1>memory</h1>
          <button className="button button--primary">Restart</button>
          <button
            onClick={() => setGameActive()}
            className="button button--secondary"
          >
            New Game
          </button>
        </header>
        <main className="start__main">
          <div
            className={`start__board start__board--grid-${settings.gridSize}`}
          >
            {board.map((boardItem, index) => (
              <button
                onClick={() => clickHandler(boardItem.number, index)}
                key={index}
                className={`start__button ${
                  boardItem.isSelected ? 'selected' : ''
                }`}
              >
                <span>{boardItem.number}</span>
              </button>
            ))}
          </div>
        </main>
        <footer className="start__footer start__footer--single-player">
          <div className="start__player">
            <span className="start__player-no">Time</span>
            <span className="start__player-score">1:53</span>
          </div>
          <div className="start__player">
            <span className="start__player-no">Moves</span>
            <span className="start__player-score">4</span>
          </div>
        </footer>
        <footer className="start__footer">
          <div className="start__player">
            <span className="start__player-no">Player 1</span>
            <span className="start__player-score">4</span>
          </div>
          <div className="start__player current">
            <span className="start__player-no">Player 1</span>
            <span className="start__player-score">4</span>
          </div>
          <div className="start__player">
            <span className="start__player-no">Player 1</span>
            <span className="start__player-score">4</span>
          </div>
          <div className="start__player">
            <span className="start__player-no">Player 1</span>
            <span className="start__player-score">4</span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default StartGame
