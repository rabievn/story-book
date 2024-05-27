import React from 'react';
import './Checkbox.css';

type CheckboxSize = 'small' | 'medium' | 'large';
type CheckboxColor = 'blue' | 'gray' | 'green' | 'violet'

type CheckboxPropsType = {
    size: CheckboxSize
    color: CheckboxColor
    active: boolean
};

const Checkbox: React.FC<CheckboxPropsType> = ({size, color, active , ...rest}) => {
    return (
        <input type="checkbox" className={`checkbox ${size} ${color} ${active ? 'active' : ''}`} {...rest} />
    );
};

export default Checkbox;
