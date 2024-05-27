import React, {useState} from 'react';
import style from './Comment.module.scss';
import Checkbox from "../Checkbox/Checkbox";

type CommentPropsType = {};

const Comment: React.FC<CommentPropsType> = () => {
    const [isStatusExist, setIsStatusExist] = useState(false)
    return (
        <div className={`${style.comment}`}>
            <div className={`${style.comment__left}`}>
                2
            </div>
            <div className={`${style.comment__center}`}>
                <div className={`${style.comment__centerMain}`}>
                    <div className={`${style.comment__centerText}`}>
                        Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,
                        текст комментария,
                    </div>
                    {isStatusExist && <div className={`${style.comment__centerStatus}`}>
                        Status
                    </div>}
                </div>
                <div className={`${style.comment__centerInfo}`}>

                </div>
            </div>
            <div className={`${style.comment__right}`}>
                <div>
                    <Checkbox size="small" color="light-blue" active={false}/>
                </div>
                <div>
                    icons
                </div>
            </div>
        </div>
    );
};

export default Comment;
