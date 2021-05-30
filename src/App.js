import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './pages/login'
import Register from './pages/register'
import News from './pages/news'
import NavBar from './components/navbar/navbar'
import NewsDetails from './pages/newsdetails'
import Footer from '../src/components/footer/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <NavBar />


      <Switch>

          <Route exact path = "/" component = {Login} />
          <Route  path = "/register" component = {Register} />
          <Route  path = "/news" component = {News} />
          <Route  path = "/details/:id" component ={NewsDetails} />
          

      </Switch>
      
      <Footer />  
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
