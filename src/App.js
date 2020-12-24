import React, {Component} from 'react'
// import logo from './logo.svg';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super()
    this.state = {userState: [], searchTerm: ""}
    // console.log("constructor");f
  }
  componentDidMount(){
    // console.log("Mount");
    
    axios.get("https://randomuser.me/api/?results=200&nat=us")
    .then( (response) => {
      this.setState({userState: response.data.results});
    })
  }
  render(){
  console.log(this.state.searchTerm)
  return (
    <div className="App">
      <Wrapper>
        <input type="text" onChange={event => this.setState({searchTerm: event.target.value})}></input>
        {this.state.userState.filter(user => user.name.last.startsWith(this.state.searchTerm)).map(userdata => <EmployeeCard user = {userdata}/>)}
      </Wrapper>
    </div>
  );
}
}

export default App;
