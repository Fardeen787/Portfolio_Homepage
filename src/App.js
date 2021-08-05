import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
function App()  {
  return (
      <>
      <Router>
        
      <Switch>
        <div>
        <Navbar/>
         <Route exact path='/sign-in' exact component={SignIn}/>
         <Route path='/' exact component={Home}/>  
         <Route path='/products' exact component={Products}/>
         <Route path='/services' exact component={Services}/>
         <Route exact path='/sign-up'  component={SignUp}/>
        </div>
       
      </Switch>  
      </Router>
      </>
   
  )
}

export default App
