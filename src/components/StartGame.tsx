function StartGame() {
  return (
    <>
      <div className="start">
        <h1>memory</h1>
        <div className="start__panel">
          <div className="start__label">Select Theme</div>
          <div className="start__container start__container--2col">
            <button className="button--menu selected">Numbers</button>
            <button className="button--menu">Icons</button>
          </div>
          <div className="start__label">Number of Players</div>
          <div className="start__container start__container--4col">
            <button className="button--menu selected">1</button>
            <button className="button--menu">2</button>
            <button className="button--menu">3</button>
            <button className="button--menu">4</button>
          </div>
          <div className="start__label">Grid Size</div>
          <div className="start__container start__container--2col">
            <button className="button--menu selected">4&#215;4</button>
            <button className="button--menu">6&#215;6</button>
          </div>
          <button className="button--menu-big">Start Game</button>
        </div>
      </div>
    </>
  )
}

export default StartGame
