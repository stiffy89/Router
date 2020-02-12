import React, {Component} from 'react';
import Header from './UI/header.js';


import {Route, Switch, Link, Router} from 'react-router-dom';

class App extends Component {

  state = {
    currentPage : null
  }

  headerButtonHandler(buttonName){
    let chosenComponent = null;

    /*switch (buttonName) {
      case "Dog" : 
        {<Link to="/Dog"></Link>};
        chosenComponent = <Dog/>
        break;

      case "Cat" : 
      <Link to="/Cat"></Link>
      chosenComponent = <Cat/>
        break;

      case "Rabbit" : 
      <Link to="/Rabbit"></Link>
      chosenComponent = <Rabbit/>
        break;
    }*/
  }
  
  render () {
    return (
      <div>
        <Header buttonClicked = {this.headerButtonHandler}/>
        {this.headerButtonHandler}
      </div>
    )
  }

}

export default App;
