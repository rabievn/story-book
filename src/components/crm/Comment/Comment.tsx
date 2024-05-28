import React, {useState} from 'react';
import style from './Comment.module.scss';
import Checkbox from '../Checkbox/Checkbox';

type CommentPropsType = {
    isStatusExist: boolean
    numeric: number
    text: string
    imgSrc: string
    name: string
    defaultChecked: boolean
    date: string
};

const Comment: React.FC<CommentPropsType> = ({
                                                 numeric = 1,
                                                 text = "Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,\nтекст комментария,",
                                                 imgSrc,
                                                 name = "Андреев В. И.",
                                                 defaultChecked = false,
                                                 date = "16.11.2024"
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
                     <button className={`${style.comment__centerStatus}`}>
                        Status
                    </button>
                </div>
                <div className={`${style.comment__centerBottom}`}>
                    <div className={`${style.comment__centerBottomUser}`}>
                        <img className={style.comment__centerBottomUserImage} src={imgSrc} alt="Image"/>
                        {name}
                    </div>
                    <div className={`${style.comment__centerBottomDate}`}>
                        {date}
                        {/*<img src={} alt="Pencil icon"/>*/}
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
                    <button>
                        {/*<img src={} alt="Garbage icon"/>*/}
                        1
                    </button>
                    <button>
                        {/*<img src={} alt="Pencil icon"/>*/}
                        2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;
