import React from 'react';
import Form from './Form';
import PlayScreen from './PlayScreen';

class GameControl extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      color: null,
      age: 0,
      allowance: 100,
      bling: 5,
      shine: 5,
    }
    this.handleAddNewTamagucci = this.handleAddNewTamagucci.bind(this)
  }

  handleAddNewTamagucci(tamagucci) {
    let name = tamagucci.name
    let color = tamagucci.color
    this.setState({
      name: name,
      color: color
    })
  }

  render() {

    return(
      <div>
        <h1>Game Control</h1>
        <div>
          {this.state.name === null && <Form onNewTamagucci={this.handleAddNewTamagucci}/>}
        </div>
        <div>
          {this.state.name && <PlayScreen facts={this.state}/>}
        </div>
      </div>
    )
  }
}

export default GameControl;
