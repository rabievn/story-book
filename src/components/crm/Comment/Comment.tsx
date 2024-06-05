import React, {useEffect, useState} from 'react';
import style from './Comment.module.scss';
import calendar from "./icons/calendar.svg";
import GarbageIcon from "./icons/GarbageIcon";
import EditIcon from "./icons/EditIcon";
import '@progress/kendo-theme-default/dist/all.css';
import Checkbox, {CheckboxColorType, CheckboxSizeType} from "../Checkbox/Checkbox";
import Avatar, {AvatarColorType} from "../Avatar/Avatar";

type CommentPropsType = {
    numeric: number
    text: string
    imgSrc: string
    user: {
        name: string
    }
    defaultChecked: boolean
    date: string
    isMine: boolean
    isDark: boolean
    onDelete: () => void
    onEdit: () => void
    checkboxColor: CheckboxColorType
    checkboxSize: CheckboxSizeType
    avatarTheme: AvatarColorType
};

const Comment: React.FC<CommentPropsType> = ({
                                                 numeric = 1,
                                                 text = "Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,\nтекст комментария,",
                                                 imgSrc,
                                                 user = {name: "Андреев В. И."},
                                                 defaultChecked = false,
                                                 date = "16.11.2024",
                                                 isMine = true,
                                                 isDark = true,
                                                 onDelete,
                                                 onEdit,
                                                 checkboxColor = "pink",
                                                 checkboxSize = "small",
                                                 avatarTheme = "dark"
                                             }) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    useEffect(() => {
        setIsChecked(defaultChecked);
    }, [defaultChecked]);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };
    return (
        <div className={`${style.comment} ${isDark && style.commentDark}`}>
            <div className={`${style.comment__left}`}>
                {numeric}
            </div>
            <div className={`${style.comment__center}`}>
                <div className={`${style.comment__centerMain}`}>
                    <div className={`${style.comment__centerText}`}>
                        {text}
                    </div>
                </div>
                <div className={`${style.comment__centerBottom}`}>
                    <div className={`${style.comment__centerBottomUser}`}>
                        <Avatar avatarTheme={avatarTheme} size={"medium"}>
                            {imgSrc ?
                                <img className={style.comment__centerBottomUserImage} src={imgSrc} alt="User image"/>
                                :
                                user.name[0]
                            }
                        </Avatar>
                        {user.name}
                    </div>
                    <div className={`${style.comment__centerBottomDate}`}>
                        <div>{date}</div>
                        <div>
                            <img src={calendar} alt="Calendar icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.comment__right}`}>
                <div>
                    <Checkbox isChecked={isChecked}
                              onChange={handleCheckboxChange}
                              checkboxColor={checkboxColor}
                              isDark={isDark}
                              className={""}
                              size={checkboxSize}
                              rounded={"large"}/>
                </div>
                {isMine && <div className={`${style.comment__rightIcons}`}>
                    <button onClick={onDelete}>
                        <GarbageIcon color={isDark ? "#FFFFFF" : "#000000"}/>
                    </button>
                    <button onClick={onEdit}>
                        <EditIcon color={isDark ? "#FFFFFF" : "#000000"}/>
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default Comment;
