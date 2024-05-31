import React from 'react';

interface IconProps {
    color?: string;
}

const GarbageIcon: React.FC<IconProps> = ({color = '#000000'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.436" viewBox="0 0 20 20.436">
            <g id="Group_17083" data-name="Group 17083" transform="translate(-1109 -153)">
                <rect id="Rectangle_5082" data-name="Rectangle 5082" width="20" height="20"
                      transform="translate(1109 153)" fill="none"/>
                <g id="delete-2-svgrepo-com" transform="translate(1107 151)">
                    <path id="Path_8611" data-name="Path 8611" d="M10,12v5.26" transform="translate(0.312 0.468)"
                          fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_8612" data-name="Path 8612" d="M14,12v5.26" transform="translate(0.52 0.468)"
                          fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_8613" data-name="Path 8613" d="M4,7H20.832" transform="translate(0 0.208)"
                          fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_8614" data-name="Path 8614"
                          d="M6,10v8.416a3.156,3.156,0,0,0,3.156,3.156h6.312a3.156,3.156,0,0,0,3.156-3.156V10"
                          transform="translate(0.104 0.364)" fill="none" stroke={color} stroke-linecap="round"
                          stroke-linejoin="round" stroke-width="1"/>
                    <path id="Path_8615" data-name="Path 8615"
                          d="M9,5.1A2.1,2.1,0,0,1,11.1,3h2.1a2.1,2.1,0,0,1,2.1,2.1v2.1H9Z" transform="translate(0.26 0)"
                          fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
                </g>
            </g>
        </svg>
    );
};

export default GarbageIcon;
