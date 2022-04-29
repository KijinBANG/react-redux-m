import React, {Component} from "react";
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";
import './css/style.css'

export default class App extends Component {
  render() {
    return (
        <div className="App">
          <h1>
              Root
          </h1>
          <AddNumberRoot/>
          <DisplayNumberRoot/>
        </div>
    );
  }
}
