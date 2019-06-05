import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
        return (
                <div className="loginBox">       
                <h1>Login Here</h1>
                <p>Username</p>
                <input type="text" name="" placeholder="Enter Username" />
                <p>Password</p>
                <input type="password" name="" placeholder="Enter Password" />
                <input type="submit" name="" value="Login" />
                </div>
        )
}

export default LoginPage;