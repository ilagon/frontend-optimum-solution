import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import signUp from './components/Login/SignUp';
import Login from './components/Login/Login';
import './App.css';
import ForgetPass from './components/Login/ForgetPass';
import EmailSent from './components/Login/EmailSent';
import SignUpResult from './components/Login/SignUpResult';
import ChangedPass from './components/Login/ChangedPass';
import ResetPass from './components/Login/ResetPass';
import Logout from './components/Login/Logout';
import Dashboard from './components/Login/dashboard';
import TopNav from './components/Login/TopNav';
import MainPage from './components/Login/MainPage';
import AboutUs from './components/Login/AboutUs';
import PersonalBanking from './components/Login/PersonalBanking';
import FAQ from './components/Login/FAQ';
import ContactUs from './components/Login/ContactUs';
import Footer from './components/Login/Footer';
import { CssBaseline } from '@material-ui/core';
import AdminPage from "./components/admin_components/Mainpage";
import { CssBaseline } from "@material-ui/core";

function App() {
  const home = () => (
    <div>
      <TopNav />
      <MainPage />
      <AboutUs />
      <PersonalBanking />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>

  );

  return (
    <>
      <Router>
        <CssBaseline/>
        <div>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/signUp" exact component={signUp} />
            <Route path="/Login" exact component={Login} />
            <Route path="/ForgetPass" exact component={ForgetPass} />
            <Route path="/EmailSent" exact component={EmailSent} />
            <Route path="/SignUpResult" exact component={SignUpResult} />
            <Route path="/ChangedPass" exact component={ChangedPass} />
            <Route path="/ResetPass/recover/:token" exact component={ResetPass} />
            <Route path="/Admin" exact component={AdminPage} />
            <Route path="/Logout" exact component={Logout} />

          </Switch>
        </div>
      </Router>

    </>

  );
}

export default App;
