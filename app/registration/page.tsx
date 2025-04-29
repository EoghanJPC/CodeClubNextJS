import React, { useState } from "react";
import { useRouter } from 'next/navigation'

const registrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setisLoading(true);

        const response = await fetch ('authentication/registry', {
            method: 'POST',
            headers: {
                'Content': 'Application/json',
            },
            body: JSON.stringify({ name, email, password})
        })

        const data = await response.json();
        setMessage(data.message);
        setisLoading(false);

        if (response.ok) {
            router.push('/login');
        }
    };

    return (
        <div>
            <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
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
                        {isLoading ? 'Loading...' : 'Register'}
                    </button>
                    {message && <p>{message}</p>}
                </form>
                 <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default registrationPage;