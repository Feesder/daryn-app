import React from 'react'
import classes from "./input.module.css";

interface props extends React.InputHTMLAttributes<HTMLInputElement> {
    
}

const Input: React.FC<props> = ({...props}) => {
    return (
        <input { ...props } className={ classes.input } />
    )
}

export default Input;