import React, {useState} from 'react';
import style from './Comment.module.scss';
import Checkbox, {CheckboxColor} from '../Checkbox/Checkbox';
import calendar from "./icons/calendar.svg";
import edit from "./icons/edit.svg";
import garbage from "./icons/garbage.svg";
import GarbageIcon from "./icons/GarbageIcon";
import EditIcon from "./icons/EditIcon";

type CommentPropsType = {
    numeric: number
    text: string
    imgSrc: string
    name: string
    defaultChecked: boolean
    date: string
    checkboxColor: CheckboxColor
    isMine: boolean
    isDark: boolean
};

const Comment: React.FC<CommentPropsType> = ({
                                                 numeric = 1,
                                                 text = "Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,\nтекст комментария,",
                                                 imgSrc,
                                                 name = "Андреев В. И.",
                                                 defaultChecked = false,
                                                 date = "16.11.2024",
                                                 checkboxColor = "light-blue",
                                                 isMine = true,
                                                 isDark = true
                                             }) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

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
                        <img className={style.comment__centerBottomUserImage} src={imgSrc} alt="User image"/>
                        {name}
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
                    <Checkbox
                        size="small"
                        color={checkboxColor}
                        active={false}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                {isMine && <div className={`${style.comment__rightIcons}`}>
                    <button>
                        <GarbageIcon color={isDark ? "#FFFFFF" : "#000000"}/>
                    </button>
                    <button>
                        <EditIcon color={isDark ? "#FFFFFF" : "#000000"}/>
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default Comment;
