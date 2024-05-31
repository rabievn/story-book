import React from "react";

type CircleIconType = {
    status: string
}
const CircleIcon: React.FC<CircleIconType> = ({status}) => {
    const fillColor = status === "changed" ? "#F36D25" : "#2DB8CF";

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <path id="path"
                  d="M88,0a16,16,0,1,0,16,16A15.954,15.954,0,0,0,88,0ZM85.818,22.836l-5.6-5.6,1.018-1.018L85.818,20.8,96.945,9.673l1.018,1.018Z"
                  transform="translate(-72)" fill={fillColor}/>
        </svg>
    );
};

export default CircleIcon;