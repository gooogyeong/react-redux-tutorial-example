import React, { Component } from "react";
import "./App.css";
// import AddNumberRoot from "./components/AddNumberRoot";
// import DisplayNumberRoot from "./components/DisplayNumberRoot";
import Addnumber from "./containers/AddNumber.jsx";
import DisplayNumber from "./containers/DisplayNumber.jsx";

class App extends Component {
  state = { number: 0 };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <Addnumber />
        <DisplayNumber />
        {/* <AddNumberRoot></AddNumberRoot>
        <DisplayNumberRoot></DisplayNumberRoot> */}
      </div>
    );
  }
}

export default App;
