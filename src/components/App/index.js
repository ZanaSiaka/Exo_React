import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../../App.css'
import Header from '../Header'
import Landing from '../Landing'
import Footer from '../Footer'
import Welcome from '../Welcome'
import Login from '../Login'
import Signup from '../Signup'
import ErrorPage from '../ErrorPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/welcome' component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route component={ErrorPage} />
      </Switch>

      <Footer />
      
    </BrowserRouter>
  )
}

export default App
