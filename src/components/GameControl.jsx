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
    this.handleAddNewTamagucci = this.handleAddNewTamagucci.bind(this);
    this.allowanceLevel = this.allowanceLevel.bind(this);
    this.shineLevel = this.shineLevel.bind(this);
    this.ageLevel = this.ageLevel.bind(this);
    this.handleAllowanceClick = this.handleAllowanceClick.bind(this);
    this.handleShineClick = this.handleShineClick.bind(this);
  }

  handleAddNewTamagucci(tamagucci) {
    let name = tamagucci.name
    let color = tamagucci.color
    this.setState({
      name: name,
      color: color
    })
  }

  componentDidMount() {
    this.allowanceLevel();
    this.shineLevel();
    this.ageLevel();
  }

  allowanceLevel() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          allowance: prevState.allowance -20
        }
      })
    }, 5000);
    console.log(this.state.allowance);
  }

  shineLevel() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          shine: prevState.shine -1
        }
      })
    }, 7000);
    console.log(this.state.shine);
  }

  ageLevel() {
    setInterval(() => {
      this.setState(prevState => {
        return {
          age: prevState.age +1
        }
      })
    }, 60000);
    console.log(this.state.age);
  }

  handleAllowanceClick() {
    this.setState(prevState => {
      return {
        allowance: prevState.allowance +50
      }
    });
  }

  handleShineClick() {
    this.setState(prevState => {
      return {
        shine: prevState.shine +1
      }
    });
  }

  render() {

    return(
      <div>
        <h1>Game Control</h1>
        <div>
          {this.state.name === null && <Form onNewTamagucci={this.handleAddNewTamagucci}/>}
        </div>
        <div>
          {this.state.name && <PlayScreen facts={this.state} onAllowanceClick={this.handleAllowanceClick} onShineClick={this.handleShineClick}/>}
        </div>
      </div>
    )
  }
}

export default GameControl;
