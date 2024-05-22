import React, {InputHTMLAttributes} from 'react';
import './Input.css';

type InputSize = 'small' | 'medium' | 'large';

type InputPropsType = {
    size?: InputSize
    placeholder: string
} | InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputPropsType> = ({ size = "medium", ...rest }) => {
    return (
        <input className={`button ${size}`} {...rest} />
    );
};

export default Input;
