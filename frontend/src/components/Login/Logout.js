import React from "react";
import ReactDOM from "react-dom";

import "./logout.css";

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { logginStatus: true };
    this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];

    this.warn = this.warn.bind(this);
    this.logout = this.logout.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);

    for (var i in this.events) {
      window.addEventListener(this.events[i], this.resetTimeout);
    }

    this.setTimeout();
  }

  clearTimeout() {
    if (this.warnTimeout) clearTimeout(this.warnTimeout);

    if (this.logoutTimeout) clearTimeout(this.logoutTimeout);
  }

  setTimeout() {
    this.warnTimeout = setTimeout(this.warn, 16 * 1000);

    this.logoutTimeout = setTimeout(this.logout, 30 * 1000);
  }

  resetTimeout() {
    this.clearTimeout();
    this.setTimeout();
  }

  warn() {
    alert("You will be logged out automatically in 1 minute.");
  }

  logout() {
    // Send a logout request to the API
    console.log("Sending a logout request to the API...");
    this.setState({ logginStatus: false });
    // this.destroy(); // Cleanup
  }

  destroy() {
    this.clearTimeout();

    for (var i in this.events) {
      window.removeEventListener(this.events[i], this.resetTimeout);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Logout</h1>
        <h2>Thank you for banking with us!</h2>
        {/* <h2>Status :{this.state.logginStatus ? "Loggin" : "Logout"}</h2> */}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Logout />, rootElement);

export default Logout;