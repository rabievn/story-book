import React, {ReactNode} from 'react';
import './Center.css';

type CenterPropsType = {
    children: ReactNode
}

const Center: React.FC<CenterPropsType> = ({children}) => {
    return (
        <div className="center">
            {children}
        </div>
    );
};

export default Center;