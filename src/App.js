import React, { Component } from "react";
import "./App.css";
import Popover from "./Popover";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Popover />
          <button>button1</button>
          <button>button2</button>
        </header>
      </div>
    );
  }
}

export default App;
