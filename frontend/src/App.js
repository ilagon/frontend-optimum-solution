import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signUp from './components/Login/SignUp';
import Login from './components/Login/Login';
import './App.css'
import ForgetPass from './components/Login/ForgetPass';
import EmailSent from './components/Login/EmailSent';
import SignUpResult from './components/Login/SignUpResult';
import ChangedPass from './components/Login/ChangedPass';
import ResetPass from './components/Login/ResetPass';
import Logout from './components/Login/Logout';

function App() {

  return (
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signUp" exact component={signUp} />
            <Route path="/Login" exact component={Login} />
            <Route path="/ForgetPass" exact component={ForgetPass} />
            <Route path="/EmailSent" exact component={EmailSent} />
            <Route path="/SignUpResult" exact component={SignUpResult} />
            <Route path="/ChangedPass" exact component={ChangedPass} />
            <Route path="/ResetPass" exact component={ResetPass} />
            <Route path="/Logout" exact component={Logout} />
          </Switch>
        </div>
      </Router>

    </React.Fragment>

  )
}

const home = () => (
  <div>
    <h1>START PAGE</h1>
  </div>
);

export default App
