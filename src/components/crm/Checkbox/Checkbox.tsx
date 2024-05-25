import React, {InputHTMLAttributes} from 'react';

type CheckboxSize = 'small' | 'medium' | 'large';

type CheckboxPropsType = {
    size?: CheckboxSize
    placeholder: string
} | InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxPropsType> = ({ size = "medium", ...rest }) => {
    return (
        <input className={`input ${size}`} {...rest} />
    );
};

export default Checkbox;
