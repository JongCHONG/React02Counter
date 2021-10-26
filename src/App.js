import React from 'react';
import './App.css';
import Counter from "./components/Counter"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count1: 0,
      count2: 0
    }

  }

  handlePlusClick1 = () => {
    if (this.state.count1 < 100) {
      this.setState({count1: this.state.count1 + 1})
      if (this.state.count1 === this.state.count2) {
        this.setState({count2: this.state.count2 + 1})
      }
    }
  }
  handleMinusClick1 = () => {
    if (this.state.count1 > 0) {
      this.setState({count1: this.state.count1 - 1})
    }
  }
  handlePlusClick2 = () => {
    if (this.state.count2 < 100) {
      this.setState({count2: this.state.count2 + 1})
    }
  }
  handleMinusClick2 = () => {
    if (this.state.count2 > 0) {
      this.setState({count2: this.state.count2 - 1})
      if (this.state.count1 === this.state.count2) {
        this.setState({count1: this.state.count1 - 1})
      }
    }
  }

  render() {
    // console.log(this.state.count1)

    return (
      <>
        <h1>Counter</h1>
        <Counter count1={this.state.count1} increment={this.handlePlusClick1} substract={this.handleMinusClick1}/>
        <Counter count2={this.state.count2} increment={this.handlePlusClick2} substract={this.handleMinusClick2}/>
      </>
    )
  }
}

export default App;
