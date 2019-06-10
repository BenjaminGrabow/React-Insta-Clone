import React from 'react';

const LoginPage = (props) => {
        return (
                <div className="loginBox">       
                <h1>Login Here</h1>
                <p>Username</p>
                <input onChange={props.theUsername} type="text" name="" placeholder="Enter Username" />
                <p>Password</p>
                <input onChange={props.thePassword} type="password" name="" placeholder="Enter Password" />
                <button onClick={props.toPostpage}>Login</button>
                </div>
        )
}

export default LoginPage;