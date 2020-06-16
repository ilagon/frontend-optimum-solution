import React from 'react';

function Nav() {
  return (
    <nav class="navbar">
      <div class="dropdown">
        <button class="dropbtn">Button 1
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/SignUp">Customer Sign Up</a>

        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Button 2
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/ForgetPass">forget pass</a>

        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Button 3
            <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/Login">Login</a>

        </div>
      </div>


    </nav>
  )
}

export default Nav;