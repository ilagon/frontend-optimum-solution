import React, { useState } from 'react'
import axios from 'axios'
import Nav from './components/Login/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signUp from './components/Login/SignUp';
import Login from './components/Login/Login';
import './App.css'
import ForgetPass from './components/Login/ForgetPass';
import EmailSent from './components/Login/EmailSent';
// import EmailSent from './components/Login/EmailSent';
// import Logout from './components/Login/Logout';

function App() {



  const getUsers = () => {
    axios.get("http://localhost:7001/users/",
      // {
      //   headers: {
      //     authorization: "Bearer " + token
      //   }}
    )

      .then(res => console.log(res))
      .catch(err => { console.log(err) })

    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };

    // fetch("http://localhost:7001/users/", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }

  return (
    <React.Fragment>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/signUp" exact component={signUp} />
            <Route path="/Login" exact component={Login} />
            <Route path="/ForgetPass" exact component={ForgetPass} />
            <Route path = "/EmailSent" exact component={EmailSent} />
          </Switch>
        </div>
      {/* <EmailSent/> */}
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
