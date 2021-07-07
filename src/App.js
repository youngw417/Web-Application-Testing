import React from "react";

import "./App.css";
import Header from "./components/header";

import Display from "./components/display";
import Dashboard from "./components/dashboard";

// const ballCount

class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0,
    atBat: ""
    // balls,
    // strikes
  };

  componentDidMount() {
    this.checkTodisplay();
  }

  checkTodisplay = batItem => {
    this.setState({
      atBat: batItem
    });
    // this.setState({
    //   ...this.state, atbat: batItem})
    if (batItem === "strike 🥎") {
      if (this.state.strikes === 2) this.resetDisplay();
      else
        this.setState({
          strikes: this.state.strikes + 1
        });
    } else if (batItem === "ball ⚾️") {
      this.setState({
        balls: this.state.balls + 1
      });
      if (this.state.balls === 4) this.resetDisplay();
    } else if (batItem === "foul 😲" && this.state.strikes < 2)
      this.setState({
        strikes: this.state.strikes + 1
      });
    else if (batItem === "hit 💥") this.resetDisplay();
  };

  resetDisplay = () => {
    this.setState({
      balls: 0,
      strikes: 0
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="grid-2">
          <div className="grid grid-left">
            <Display displayItem={this.state} />
          </div>
          <div className="grid grid-right">
            <Dashboard checkTodisplay={this.checkTodisplay} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
