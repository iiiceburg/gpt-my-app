import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
            <br />
            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;
