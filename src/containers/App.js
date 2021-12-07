import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
      randomChars:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  };

  onReset = () => {
    let tempNumber = Math.floor(Math.random()*100);       
    this.setState({randomChars: tempNumber});    
  };  
 

  render() {
    const { robots, searchfield, randomChars } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });   

    return !robots.length ?
      <h1>Loading robots...please wait...(btw you need an internet connection for this to work)</h1> :
      (
        <div className='tc'>
          <h1 className='mid'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} reset={this.onReset}/>
          <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} randomChars={randomChars} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;