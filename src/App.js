import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Login from './Authentication/Login';
import Header from './Nav/Header';
import Dashboard from './Student/Dashboard/DashBoardComponent';
import './App.css';


class App extends Component {

  renderLogin = () => {
    return(
      <div >
        <Login style={{margin:'20 auto'}} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>

          <Switch>
            <Route path='/students' component={Dashboard} />
            <Route exact path='/' render={this.renderLogin} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
