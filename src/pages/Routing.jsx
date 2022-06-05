import React from 'react'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from './Home'
import ProductList from './ProductList'
import Login from './Login'
import Register from './Register'
import Cart from './Cart'
import Forgot from './Forgot'

import Product from './Product'


const Routing = () => {
  const user = true
  return (
    <div>
      <BrowserRouter>
         <Switch>
           <Route path="/" exact component={Home}/>

           <Route path="/Cart" exact component={Cart}/>
          <Route path="/Forgot" exact component={Forgot}/>
           <Route path="/Login" exact component={Login}/>
            <Route path="/Register" exact component={Register}/>
           <Route path="/Products/:category" exact component={ProductList}/> 
           <Route path="/Product/:id" exact component={Product}/> 
           {/* <Route path="/Login">
           {
             user ? <Redirect to="/"/>:<Login/>}
           </Route>
           <Route path="/Register">
           {
             user ? <Redirect to="/"/>:<Register/>}
           </Route>
           <Route path="/Forgot">
           {
             user ? <Redirect to="/"/>:<Forgot/>}
           </Route> */}
         </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routing
