import React, { Component } from 'react'
import Header from './Bootstrap/Header'

class App extends Component {
  state = {
    Dark: false
  };
  render() {
    return (
      // <Header dark={true}>My Portfolio Generator Lite</Header>
      <Header dark={this.state.Dark}> My Portfolio Generator Dark</Header>
    )
  }
}
export default App

