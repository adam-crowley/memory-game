import { useEffect, useState } from 'react'
import { useMemoryStore } from '../store/memoryStore'

function StartGame() {
  const { settings, setGameActive, board, updateBoardItem } = useMemoryStore()
  // const [pair, setPair] = useState<number[]>([])
  const [counter, setCounter] = useState<number>(1)

  // useEffect(() => {
  //   if (pair.length === 2) {
  //     if (pair[0] === pair[1]) {
  //       updateBoardItem(board[], { isComplete: true })
  //       updateBoardItem(pair[1], { isComplete: true })
  //     }
  //   }
  // }, [pair])

  const clickHandler = (boardItem: number, index: number) => {
    // if (pair.length === 2) {
    //   return
    // }
    setCounter((prev) => (prev < 2 ? 2 : 1))
    updateBoardItem(index, { isSelected: true })
    // setPair((prev) => [...prev, boardItem])

    // console.log('pair', pair)
    console.log('counter', counter)
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
                } ${boardItem.isComplete ? 'complete' : ''}`}
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
