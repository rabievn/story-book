import React, {ReactNode} from 'react';
import {Avatar as KendoAvatar} from "@progress/kendo-react-layout";
import "./Avatar.scss";

export type AvatarColorType =
    'dark'
    | 'base'
    | 'error'
    | 'info'
    | 'inverse'
    | 'light'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'tertiary'
    | 'warning';

type AvatarSizeType = "small" | "medium" | "large";

type AvatarType = {
    children: ReactNode
    avatarTheme: AvatarColorType
    size: AvatarSizeType
}

const Avatar: React.FC<AvatarType> = ({children, avatarTheme, size}) => {
    return (
        <KendoAvatar rounded="full" type="text" themeColor={avatarTheme} size={size}>
            {children}
        </KendoAvatar>
    )
}

export default Avatar;