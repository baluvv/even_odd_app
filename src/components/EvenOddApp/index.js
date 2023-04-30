import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0, numberType: 'Even'}

  getRandomNumber = () => {
    this.setState(prevState => {
      const randomNumber = Math.ceil(Math.random() * 100)
      if (randomNumber % 2 === 0) {
        return {number: randomNumber, numberType: 'Even'}
      }
      return {number: randomNumber, numberType: 'Odd'}
    })
  }

  render() {
    const {number, numberType} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Count {number}</h1>
        <p className="paragraph">Count is {numberType}</p>
        <button className="button" onClick={this.getRandomNumber}>
          Increment
        </button>
        <p className="paragraph1">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
