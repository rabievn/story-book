import React from 'react';
import style from './Comment.module.scss';
import calendar from "./icons/calendar.svg";
import GarbageIcon from "./icons/GarbageIcon";
import EditIcon from "./icons/EditIcon";
import "./Comment.scss";
import {Checkbox} from "@progress/kendo-react-inputs";
import '@progress/kendo-theme-default/dist/all.css';

type CommentPropsType = {
    numeric: number
    text: string
    imgSrc: string
    name: string
    defaultChecked: boolean
    date: string
    isMine: boolean
    isDark: boolean
    onDelete: () => void
    onEdit: () => void
};

const Comment: React.FC<CommentPropsType> = ({
                                                 numeric = 1,
                                                 text = "Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,\nтекст комментария,",
                                                 imgSrc,
                                                 name = "Андреев В. И.",
                                                 defaultChecked = false,
                                                 date = "16.11.2024",
                                                 isMine = true,
                                                 isDark = true,
                                                 onDelete,
                                                 onEdit
                                             }) => {
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
                    <Checkbox className="comment__checkbox" size={"large"} rounded={"large"}/>
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
