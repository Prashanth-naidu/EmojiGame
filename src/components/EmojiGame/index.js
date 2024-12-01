import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojiList: [],
    topScore: 0,
    gameOver: true,
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWin = clickedEmojiList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWin={isWin}
        score={clickedEmojiList.length}
        onClickPlayAgain={this.resetGame}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const suffledList = this.shuffledEmojisList()

    return (
      <ul className="unordered-list">
        {suffledList.map(each => (
          <EmojiCard
            key={each.id}
            eachEmoji={each}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }
  gameProgress = currentScore => {
    const {topScore, gameOver} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, gameOver: false})
  }

  clickEmoji = id => {
    const {clickedEmojiList} = this.state
    const {emojisList} = this.props
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiListLength = clickedEmojiList.length

    if (isEmojiPresent) {
      this.gameProgress(clickedEmojiListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiListLength) {
        this.gameProgress(clickedEmojiListLength)
      }
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }
  resetGame = () => {
    this.setState({clickedEmojiList: [], gameOver: true})
  }
  render() {
    const {topScore, gameOver} = this.state
    const {clickedEmojiList} = this.state

    return (
      <div className="bg-container">
        <NavBar score={clickedEmojiList.length} topScore={topScore} />
        <div className="card-container">
          {gameOver ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
