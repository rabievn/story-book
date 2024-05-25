import React from 'react';
import './Checkbox.css';

type CheckboxSize = 'small' | 'medium' | 'large';
type CheckboxColor =
    'blue' | 'gray' | 'green' | 'violet'

type CheckboxPropsType = {
    size: CheckboxSize,
    color: CheckboxColor,
};

const Checkbox: React.FC<CheckboxPropsType> = ({size ,color, ...rest}) => {
    return (
        <input type="checkbox" className={`checkbox ${size} ${color}`} {...rest} />
    );
};

export default Checkbox;
