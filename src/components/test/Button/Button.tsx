import React, {ReactNode, ButtonHTMLAttributes} from 'react';
import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';

type ButtonPropsType = {
    variant?: ButtonVariant;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonPropsType> = ({variant = 'primary', children, ...rest}) => {
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
