import React, { useState } from 'react';
import style from './Comment.module.scss';
import Checkbox from '../Checkbox/Checkbox';

type CommentPropsType = {
    isStatusExist: boolean
    numeric: number
    text: string
    imgSrc: string
    name: string
    defaultChecked: boolean
};

const Comment: React.FC<CommentPropsType> = ({
                                                 isStatusExist,
                                                 numeric = 1,
                                                 text = "Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,\nтекст комментария,",
                                                 imgSrc,
                                                 name = "Андреев В. И.",
                                                 defaultChecked = false
                                             }) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <div className={`${style.comment}`}>
            <div className={`${style.comment__left}`}>
                {numeric}
            </div>
            <div className={`${style.comment__center}`}>
                <div className={`${style.comment__centerMain}`}>
                    <div className={`${style.comment__centerText}`}>
                        {text}
                    </div>
                    {isStatusExist && <div className={`${style.comment__centerStatus}`}>
                        Status
                    </div>}
                </div>
                <div className={`${style.comment__centerBottom}`}>
                    <div className={`${style.comment__centerBottomUser}`}>
                        <img className={style.comment__centerBottomUserImage} src={imgSrc} alt="Image"/>
                        {name}
                    </div>
                    <div className={`${style.comment__centerBottomDate}`}>
                        date
                    </div>
                </div>
            </div>
            <div className={`${style.comment__right}`}>
                <div>
                    <Checkbox
                        size="small"
                        color="light-blue"
                        active={false}
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                </div>
                <div className={`${style.comment__rightIcons}`}>
                    <div>
                        1
                    </div>
                    <div>
                        2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
