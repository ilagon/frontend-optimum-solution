import React,{useState,useEffect} from 'react'
import axios from 'axios'


function Dashboard() {
    var config = {
        method: 'get',
        url: 'http://localhost:7001/users',
        headers: { 
          'Authorization': 'Bearer ' + sessionStorage.getItem("token")
        },
      };
      
        useEffect(() => {
            axios(config)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
                window.location.href = "/Login"
            })
            .then(function () {
            });
        })

        const logout = () =>{
            sessionStorage.removeItem("token");
            window.location.href = "/logout"
        }
    return (
        <div>
            <title>A Dashboard</title>
            Empty spaces fill me up with hope.....
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Dashboard
