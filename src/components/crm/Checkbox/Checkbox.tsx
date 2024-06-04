import React from 'react';
import {Checkbox as KendoCheckbox, CheckboxChangeEvent} from "@progress/kendo-react-inputs";
import "./Checkbox.scss";

export type CheckboxSizeType = 'small' | 'medium' | 'large';
export type CheckboxColorType = 'blue' | 'gray' | 'green' | 'violet' | 'light-blue' | 'pink';

type CheckboxProps = {
    isChecked: boolean
    onChange: (event: CheckboxChangeEvent) => void
    isDark: boolean
    checkboxColor: CheckboxColorType
    size: CheckboxSizeType
    className: string
    rounded: CheckboxSizeType
};

const Checkbox: React.FC<CheckboxProps> = ({
                                               isChecked,
                                               onChange,
                                               isDark,
                                               checkboxColor,
                                               size,
                                               className,
                                               rounded
                                           }) => {
    return (
        <KendoCheckbox
            checked={isChecked}
            onChange={onChange}
            className={`${className} comment__checkbox ${isDark ? 'comment__checkboxDark' : ''} ${checkboxColor}`}
            size={size}
            rounded={rounded}
        />
    );
};

export default Checkbox;
