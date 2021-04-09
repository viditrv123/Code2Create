import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';



const Routes=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Login" exact component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;
