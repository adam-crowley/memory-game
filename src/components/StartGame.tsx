import { useEffect } from 'react'
import { useMemoryStore } from '../store/memoryStore'

function StartGame() {
  const { setGameActive } = useMemoryStore()

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
          <div className="start__board start__board--grid-6">
            <button className="start__button">16</button>
            <button className="start__button selected"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button complete">16</button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button">16</button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button">16</button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button">16</button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button">16</button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
            <button className="start__button"></button>
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
