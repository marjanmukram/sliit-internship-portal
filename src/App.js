import React, { Component } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import './firebase/firebase';
import DashBoard from './Student/Dashboard/DashBoardComponent';
import RegisterForm from './Student/Dashboard/RegisterFormComponent';
import FormI1 from './Student/FormI1/FormI1Component';
import Login from './Authentication/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

          <Switch>
            <Route path='/students' component={DashBoard} />
            <Route exact path='/' component={Login} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
