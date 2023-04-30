import React from 'react'

import { UserAuth } from '../context/UserContext';

const Home = () => {

  const { user, handleSignout } = UserAuth();

  return (
    <section className='home-container'>
      <h1 className='home-heading'>Welcome to Home Page</h1>
      <p>{user && user.email}</p>
      <button onClick={handleSignout} className='logout-button'>Log Out</button>
    </section>
  )
}

export default Home