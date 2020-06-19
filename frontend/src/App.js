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

function App() {
  return (
    <>
      <Router>
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
            <Route path="/Dashboard" exact component={Dashboard} />
            <Route path="/Logout" exact component={Logout} />

          </Switch>
        </div>
      </Router>

    </>

  );
}

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

export default App;
