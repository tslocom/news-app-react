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
        navigate('/choosepublications')
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
        <div className="flex-grow flex items-center justify-center px-4 py-12 min-h-screen bg-background">
            <div className="max-w-[420px] w-full">
                <header className="mb-12 text-center">
                    <h1 className="font-serif text-[48px] md:text-[56px] leading-none font-black tracking-tighter text-on-surface mb-4">EchoFree News</h1>
                    <h2 className="font-serif text-[20px] md:text-[24px] leading-snug font-semibold text-on-surface-variant">Signup or Login</h2>
                </header>
                <form className="flex flex-col gap-4">
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={handleEmailChange}
                        placeholder='Enter your email'
                        className="w-full px-6 py-4 rounded-full border-2 border-outline-variant bg-white text-on-surface font-sans font-semibold focus:border-primary focus:outline-none transition-colors"/>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Enter a password'
                        className="w-full px-6 py-4 rounded-full border-2 border-outline-variant bg-white text-on-surface font-sans font-semibold focus:border-primary focus:outline-none transition-colors mb-4"/>
                    <button 
                        type='button' 
                        onClick={handleSignup}
                        className="w-full bg-transparent border-2 border-outline-variant text-on-surface-variant px-6 py-4 rounded-full font-sans font-bold text-[16px] hover:border-on-surface hover:text-on-surface transition-all duration-200 hover:-translate-y-1">
                        Signup
                    </button>
                    <button 
                        type='button' 
                        onClick={handleLogin}
                        className="w-full bg-primary text-on-primary px-6 py-4 rounded-full font-sans font-bold text-[16px] hover:text-on-surface transition-all duration-200 hover:-translate-y-1">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}



export default LoginForm