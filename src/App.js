import React, {Component} from 'react'
// import logo from './logo.svg';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Col from './components/Col';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super()
    this.state = {userState: ""}
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
      <Col />
      <Wrapper>
        <EmployeeCard />
      </Wrapper>
    </div>
  );
}
}

export default App;
