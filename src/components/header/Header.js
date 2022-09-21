import React from 'react';

const Header = (props) => {

    const {head} = props;
    const userDetails = localStorage.getItem('TOKEN_NAME');

    
  return (
    <nav className='header'>
        <h1>{head}</h1>
        <ul>
          
          <li>
            {userDetails && <button >logout</button>}
          </li>
        </ul>
    </nav>
  )
}

export default Header