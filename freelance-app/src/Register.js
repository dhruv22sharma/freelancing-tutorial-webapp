import React from 'react'
import Button from '@material-ui/core/Button'
import './SignIn.css'
function Register() {
    
    return (
        <div className="SignIn">
            <h2 className="Heading">Register (It's Free)</h2>
            <input type="text" placeholder="Name" id="Name" ></input>
            <input type="email" placeholder="Email" id="Email"></input>
            <input type="password" placeholder="Password" id = "Password" ></input>
            <Button variant="outlined"  className="Button" id="submit">Register</Button>
        </div>
    )

}

export default Register
