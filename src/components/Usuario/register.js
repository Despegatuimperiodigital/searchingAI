import React, { useState } from 'react';
import './estilos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Aquí iría la lógica de registro, como enviar los datos a un servidor
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        alert('Registration submitted');
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group password-field">
                    <label htmlFor="password">Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="show-password"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                </div>
                <div className="form-group password-field">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <span
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="show-password"
                    >
                        <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </span>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;

