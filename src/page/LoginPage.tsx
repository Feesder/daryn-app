import React from 'react';
import LoginForm from '../component/LoginForm';

function LoginPage() {
    return (
        <div className="access login flex h-screen">
            <div className="form">
                <LoginForm />
            </div>
            <div className="promo w-full bg-no-repeat bg-center" />
        </div>
    )
}

export default LoginPage;