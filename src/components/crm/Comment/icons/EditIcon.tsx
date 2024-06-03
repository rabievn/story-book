import React from 'react';

interface IconProps {
    color?: string;
}

const EditIcon: React.FC<IconProps> = ({color = '#000000'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="19.166" height="19.166" viewBox="0 0 19.166 19.166">
            <path
                id="edit-1-svgrepo-com"
                d="M12.952,4.01H6.238A2.238,2.238,0,0,0,4,6.248V19.676a2.238,2.238,0,0,0,2.238,2.238H19.666A2.238,2.238,0,0,0,21.9,19.676V12.962M20.13,8.95l1.215-1.215A2.238,2.238,0,1,0,18.18,4.57L16.965,5.785M20.13,8.95,13.375,15.7a2.238,2.238,0,0,1-1.144.612l-3.292.658L9.6,13.683a2.238,2.238,0,0,1,.612-1.144l6.755-6.755M20.13,8.95,16.965,5.785"
                transform="translate(-3.5 -3.248)"
                fill="none"
                stroke={color}
            />
        </svg>
    );
};

export default EditIcon;
