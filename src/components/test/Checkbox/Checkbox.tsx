import React from 'react';
import './Checkbox.scss';

export type CheckboxSize = 'small' | 'medium' | 'large';
export type CheckboxColor = 'blue' | 'gray' | 'green' | 'violet' | 'light-blue' | 'pink' | 'light-pink';

type CheckboxPropsType = {
    size: CheckboxSize
    color: CheckboxColor
    active: boolean
    checked: boolean
    onChange: () => void
};

const Checkbox: React.FC<CheckboxPropsType> = ({size, color, active, checked, onChange, ...rest}) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className={`checkbox ${size} ${color} ${active ? 'active' : ''}`}
            {...rest}
        />
    );
};

export default Checkbox;
