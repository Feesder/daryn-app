import React from 'react';
import classes from './button.module.css';

interface props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

const Button: React.FC<props> = ({ children, ...props }) => {
    return (
        <button { ...props } className={ classes.button }>
            { children }
        </button>
    )
}

export default Button;