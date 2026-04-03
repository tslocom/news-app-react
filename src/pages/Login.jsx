import './Login.css'
import { useState } from 'react';
import { login, signup } from '../services/userServices.js'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    } 

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSignup = async (event) => {
        event.preventDefault()
        const isSuccess = await signup(email, password)
        if (isSuccess) {
        navigate('/home')
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        const isSuccess = await login(email, password)
        if (isSuccess) {
        navigate('/home')
        }

    }
    return (
        <div className="login-container">
            <h1>Signup or Login</h1>
            <form className="login-form">
                <div className="form-controls">
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter your email'
                    />
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Create a password'
                    />
                    <button type='button' onClick={handleSignup}>Signup</button>
                    <button type='button' onClick={handleLogin}>Login</button>
                </div>
            </form>
        </div>
    )
}



export default LoginForm