import React from 'react';
import "./Login.css";
import log from "../assets/login.jpg";

const Login=()=>{
    return(<div>
    <section id="loggingin">
        <div className="loginbox">
    <img src={log} className="login" />
        <h1>Login</h1>
        <form>
            <p>Username</p>
            <input type="text" name="" placeholder="Enter Employee id" />
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password" />
            <input type="submit" name="" value="Login" />
            <br />
            <a href="#"> Don't have an account?</a>
        </form>
    </div>
    </section>
    </div>);
}
export default Login;
