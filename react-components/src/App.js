import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Button from "./components/button/index"

class App extends Component {

  state = {
    counter: 0,
    text: ''
  }

  handleConfirm = () => {
    alert("Confirmado!")
    this.setState({
      counter: this.state.counter+1
    })
  }

  changeText = (text) => {
    this.setState({
      text: text.target.value
    })
  }
  render () {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Hello World! {this.state.counter} </h2>
          <Button onClick={this.handleConfirm}>
              <h4>Confirmar</h4>
          </Button>
          <p> {this.state.text} </p>
          <input onChange={this.changeText} value={this.state.text} />
        </header>
      </div>
    )

  }
    
}

export default App;
