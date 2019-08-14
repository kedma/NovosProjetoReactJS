import React, { Component } from "react";
import "./App.css";

import Conversor from "./components/Conversor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Conversor moedaA="USD" modedaB="BRL" />
      </div>
    );
  }
}

export default App;
