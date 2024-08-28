import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button>OK</button>
        </>
    );
}

export default Login;