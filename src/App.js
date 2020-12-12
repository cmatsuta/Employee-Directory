import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super()
    this.state = {testState: ""}
    // console.log("constructor");
  }
  componentDidMount(){
    // console.log("Mount");
    
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then( (response) => {
      console.log(response);
    })
  }
  render(){
  // console.log("render")
  return (
    <div className="App">
      test
    </div>
  );
}
}

export default App;
