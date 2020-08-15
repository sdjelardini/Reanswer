import React from 'react';
import Sidebar from './Sidebar'
// import Header from './Header'
import Demo from './Container'

function HomePage () {
    return (
    <div>
    {/* <div className='header'>
      <Header />
    </div> */}
    <div className='pagina'>
    <div className='sidebar'>
      <Sidebar />
    </div>
    <div className='containerTotal'>
      <Demo />
    </div>
    </div>
    </div>
    )
}

export default HomePage;