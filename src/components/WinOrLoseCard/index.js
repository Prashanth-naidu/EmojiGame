// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin, onClickPlayAgain} = props
  const result = isWin ? 'You Won' : 'You Lose'
  const scoreCard = isWin ? 'Best Score' : 'Score'
  const imgUrl = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickPlayAgainBtn = () => {
    onClickPlayAgain()
  }
  return (
    <div className="result-card">
      <div className="score-card">
        <h1>{result}</h1>
        <div>
          <p>{scoreCard}</p>
          <p>{score}/12</p>
          <button onClick={onClickPlayAgainBtn}>Play Again</button>
        </div>
      </div>
      <div>
        <img src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
