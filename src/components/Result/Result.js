import React, { Component } from 'react'

export default class Result extends Component {
  render(){
    const {data, word, guess } = this.props
    console.log(data)
    return(
      <>
        {
          data.isCorrect 
          ? <h2>You were correct! :D</h2>
          : <h2>Good try, but not quite right :(</h2>
        }
        <main className='DisplayScore'>
          <p>Your total score is: {data.totalScore}</p>
        </main> 
        <main className='DisplayFeedback'>
          <p>
            The correct translation for {word} was {data.answer} and you chose {guess.toLowerCase()}!
          </p>
        </main>
      </>
    )
  }
}