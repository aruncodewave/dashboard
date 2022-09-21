import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';


const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const userChangeHandler = (e) => {
    const val = e.target.value;
    setUser(val);
  }

  const passChangeHandler = (e) => {
    const val = e.target.value;
    setPass(val);
  }

  const loginHandler = () => {

    const data = {
      user,
      pass
    }
    const jsonData = (JSON.stringify(data));
    localStorage.setItem('TOKEN_NAME', jsonData);
    navigate('/dashboard');
  };

  return (
    <div>
      <Header head='Login' />
      <div className='login__container'>
        <h1>Login</h1>
        <form onSubmit={loginHandler} >
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="text" required onChange={userChangeHandler} name="user" />
          </div>
          <div className="control">
          <label htmlFor="password">Your Password</label>
          <input type="text" required onChange={passChangeHandler} name="password" />
          </div>
          <button type='submit' >submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login