import React from 'react'
import Header from '../components/header/Header'

const Dashboard = (props) => {
  console.log(props.isAuthenticated);
  return (
    <div>
      <Header head='Dashboard'/>
      <section className='section__content'>
        <h1>Welcome on Board!</h1>
      </section>
    </div>
  )
}

export default Dashboard