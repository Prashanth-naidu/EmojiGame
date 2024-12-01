// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="navbar">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="scores">
        <p className="P1">Score: {score}</p>
        <p>Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
