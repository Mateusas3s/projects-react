import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Button from "./components/button/index"

class App extends Component {

  handleConfirm() {
    alert("Confirmado!")
  }
  render () {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p> Hello World! </p>
          <Button onClick={this.handleConfirm} link="https://medium.com/@henrique.weiand/react-propriedades-children-plano-de-aula-iv-488beb6ba94a">
              <h4>Confirmar</h4>
          </Button>
        </header>
      </div>
    )

  }
    
}

export default App;
