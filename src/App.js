//app
import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//components
import Header from './components/header';
import Home from './components/home';
import ToDo from './components/toDo';
import Weather from './components/weather';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/todo' component={ToDo} />
            <Route path='/weather' component={Weather} />
          </Switch>
        </div>
        </BrowserRouter>


    );
  }
}

export default App;
