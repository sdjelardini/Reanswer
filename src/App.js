import React from 'react';
import NavBar from './components/NavBar'
import './App.css'
import {useAuth0} from './react-auth0-spa';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoutes';
import HomePage from './components/HomePage';


function App() {
  const {loading} = useAuth0();

  if (loading){
    return <div>Loading...</div>
  }


  return (
   <div>
     <BrowserRouter>
     <header>
       <NavBar />
     </header>
     <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/home" component={HomePage} />
          <PrivateRoute path="/profile" component={Profile} />
     </Switch>
      </BrowserRouter>
   </div>
  );
}

export default App;
