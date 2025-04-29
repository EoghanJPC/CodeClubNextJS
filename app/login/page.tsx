import React, { useState } from "react";
import { useRouter } from 'next/navigation'

const logInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);

        const response = await fetch ('authenication/login', {
            method: 'POST',
            headers: {
                'Content': 'Application/json',
            },
            body: JSON.stringify({ email, password}),
        });

        const data = await response.json()
        setMessage(data.message);
        setisLoading(false);

        if(response.ok) {
            router.push('/app');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Login'}
                </button>
                {message && <p>{message}</p>}
            </form>
            <p>Don't have an account? <a href="/registration">Register</a></p>
        </div>
    );
};

export default logInPage;