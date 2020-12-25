import React, { Component } from 'react'
import config from '../../config'
import token from '../../services/token-service'

class LearningRoute extends Component {
  state = {
    word: {}
  }

  async getData() {
    try {
      const response = await fetch(`${config.API_ENDPOINT}/language/head`, {
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${token.getAuthToken()}`,
        },
      });
      const data = await response.json();
      console.log(data);
      this.setState({
        word: data,
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <section>
        <h2>Translate the word:</h2>
        <span>{this.state.word.nextWord}</span>
        <p>Your total score is: {this.state.word.totalScore}</p>
        <form>
          <label htmlFor='learn-guess-input'>What's the translation for this word?</label>
          <input id='learn-guess-input' type='text' required></input>
          <button type='submit'>Submit your answer</button>
        </form>
        
        <p>You have answered this word correctly {this.state.word.wordCorrectCount} times.</p>
        <p>You have answered this word incorrectly {this.state.word.wordIncorrectCount} times.</p>

      </section>
    );
  }
}

export default LearningRoute
