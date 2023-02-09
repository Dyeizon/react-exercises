import { useState } from 'react';
import './style.css';

export const Login = () => {
    const [firstEmailTyping, setFirstEmailTyping] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    function handleEmailTyping(e) {
        setEmail(e.target.value);

        setEmailError('');

        if(firstEmailTyping) {
            setFirstEmailTyping(false);
        } else {
            if(email.length - 1 < 0) {
                setEmailError('O email não pode ser vazio');
            }
        }

        
    }

    function handlePasswordTyping(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        
    }

    return (
        <div className='login-container'>
            <form className="login-form" onSubmit={(e) => {handleSubmit(e)}} action="">
                <fieldset>
                    <label htmlFor="email">Email </label>
                    <span className='form-error'>{emailError}</span>
                    <input value={email} onChange={(e) => {handleEmailTyping(e)}} type="email" name="email" id="email"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => {handlePasswordTyping(e)}} type="password" name="password" id="password"/>
                </fieldset>

                <button  type="submit">Login</button>
                <a href="/">Don't have an account? Click here.</a>
            </form>
        </div>
    );
}