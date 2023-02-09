import { useRef, useState } from 'react';
import './style.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const emailRef = useRef();

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const passwordRef = useRef();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleEmailTyping(e) {
        setEmail(e.target.value);
    }

    function handlePasswordTyping(e) {
        setPassword(e.target.value);
    }

    function clearError(e) {
        e.target.style.borderColor = 'black';
    }

    function handleSubmit(e) {
        e.preventDefault();

        if(!email) {
            setEmailError('This field cannot be empty');
            emailRef.current.style.borderColor = 'red';
        } else {
            setEmailError('');
        }

        if(!password) {
            setPasswordError('This field cannot be empty');
            passwordRef.current.style.borderColor = 'red';
        } else {
            setPasswordError('');
        }

        if(email !== 'dyeizon@gmail.com' || password !== 'asd123') {
            setError('Authentication Failed');
            setSuccess('');
            console.log(email, password);
        } else {
            setSuccess('Authentication Successful');
            setError('');
            setEmail('');
            setPassword('');      
        }
    }

    return (
        <div className='login-container'>
            <form className="login-form" onSubmit={(e) => {handleSubmit(e)}} action="">
                <fieldset>
                    <label htmlFor="email">Email {emailError ? '- ' : ''} <span className='form-error'>{emailError}</span></label>
                    
                    <input ref={emailRef} value={email} onFocus={(e) => clearError(e)} onChange={(e) => {handleEmailTyping(e)}} type="email" name="email" id="email"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password {passwordError ? '- ' : ''} <span className='form-error'>{passwordError}</span></label>
                    <input ref={passwordRef} value={password} onFocus={(e) => clearError(e)} onChange={(e) => {handlePasswordTyping(e)}} type="password" name="password" id="password"/>
                </fieldset>

                <div className='regular-error'><span className='form-error'>{error}</span><span className='form-success'>{success}</span></div>

                <button type="submit">Login</button>
                <a href="/">Don't have an account? Click here.</a>
            </form>
        </div>
    );
}