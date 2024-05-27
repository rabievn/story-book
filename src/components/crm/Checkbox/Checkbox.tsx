import React from 'react';
import './Checkbox.css';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxColor = 'blue' | 'gray' | 'green' | 'violet' | 'light-blue' | 'pink' | 'light-pink';

type CheckboxPropsType = {
    size: CheckboxSize
    color: CheckboxColor
    active: boolean
};

const Checkbox: React.FC<CheckboxPropsType> = ({size, color, active, ...rest}) => {
    return (
        <input type="checkbox" className={`checkbox ${size} ${color} ${active ? 'active' : ''}`} {...rest} />
    );
};

export default Checkbox;
