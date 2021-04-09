import React, { useState } from 'react';
import "./Login.css";
import log from "../assets/login.jpg";
import { authenticate, isAuthenticated, login } from '../auth/helper/auth';
import { Redirect } from 'react-router';

const Login=()=>{

    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })
    
    const {email, password, error, loading, didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true})
        login({email,password})
            .then(data=>{
                if(data.error)
                setValues({...values,error: data.error,loading: false})
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                        console.log(data);
                    })
                }
            })
            .catch(err=>console.log("signin failed"));
    }

    const performRedirect=()=>{
        if(didRedirect)
        {
            if(user&&user.role==1)
            {
                return <p className="text-white text-center">Redirect to admin</p>
            }
            else{
                return <Redirect to="/" />;
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />
        }
        
    }
    return(<div>
    <section id="loggingin">
        <div className="loginbox">
    <img src={log} className="login" />
        <h1>Login</h1>
        <form>
            <p>Email</p>
            <input type="text" name="" placeholder="Enter Employee id" value={values.email} onChange={handleChange("email")}/>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password" value={values.password} onChange={handleChange("password")}/>
            <input type="submit" name="" value="Login" onClick={onSubmit} />
            <br />
            <a href="#"> Don't have an account?</a>
        </form>
    </div>
    </section>
    {performRedirect()}
    </div>);
}
export default Login;
