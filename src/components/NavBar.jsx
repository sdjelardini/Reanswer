import React from 'react';
import {Link} from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import '../css/NavBar.css';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}


      {isAuthenticated && (
        <span class="links">
          {/* <Link to='/'>Home</Link> */}
          <Link className='home' to='/home'> Home</Link>
          <Link className='profile' to='/profile'> admin </Link>
        </span>
      )}
    </div>
  );
};

export default NavBar;