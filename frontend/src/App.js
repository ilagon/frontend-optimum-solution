import React, { useState } from 'react'
import axios from 'axios'
import Nav from './components/Login/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signUp from './components/Login/SignUp'
import Login from './components/Login/Login'
import './App.css'


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
            <Route path="/signUp" component={signUp} />
            <Route path="/Login" component={Login} />
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
