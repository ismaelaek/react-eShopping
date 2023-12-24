    import React, { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1> 
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name='username'
                    placeholder='username'
                    onChange={handleChange}
                    
                />

                <label htmlFor="password">Password</label>
                <input type="password" name='password' />

                <input
                    type="submit"
                    value="login"
                    placeholder='password'
                    onChange={handleChange}
                />
            </form>
        </>
    );
};

export default Login;