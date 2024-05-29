import React, {useState} from 'react';
import style from './Comment.module.scss';
import Checkbox from '../Checkbox/Checkbox';
import CircleIcon from "./icons/CircleIcon";

type CommentPropsType = {
    numeric: number
    text: string
    imgSrc: string
    name: string
    defaultChecked: boolean
    date: string
    status: {
        changeStatus: string
        isExist: boolean
        title: string
        pastValue: object
        newValue: object
    }
};

const Comment: React.FC<CommentPropsType> = ({
                                                 numeric = 1,
                                                 text = "Текст комментария, текст комментария, текст комментария, текст комментария, текст комментария,\nтекст комментария,",
                                                 imgSrc,
                                                 name = "Андреев В. И.",
                                                 defaultChecked = false,
                                                 date = "16.11.2024",
                                                 status = {
                                                     changeStatus: "changed",
                                                     title: "Данные изменены (2 поле)",
                                                     pastValue: {
                                                         name: "Поле «Имя» - Руслан",
                                                         dateOfBirth: "Поле «Дата рождения» 18.08.1990"
                                                     },
                                                     newValue: {name: "Рустам", dateOfBirth: "18.08.1992"},
                                                 }
                                             }) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);
    const [isStatusValueOpen, setIsStatusValueOpen] = useState(false)

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
                    {status &&
                        <div>
                            <button className={`${style.comment__centerStatusSelect}`}
                                    onClick={(prev) => setIsStatusValueOpen(!isStatusValueOpen)}>
                                <div className={`${style.comment__centerStatusSelectText}`}>
                                    <CircleIcon status={status.changeStatus}/>
                                    <div
                                        className={`${status.changeStatus === "changed" ? style.orangeCircle : style.blueCircle}`}>
                                        {status.title}
                                    </div>
                                </div>
                                <div className={`${style.comment__centerStatusSelectArrow}`}>
                                    A
                                </div>
                            </button>
                            {isStatusValueOpen && <div
                                className={`${style.comment__centerStatusSelectField}`}>
                                <div className={`${style.comment__pastValue}`}>
                                    <div
                                        className={`${style.comment__pastValueSubtitle} ${status.changeStatus === "changed" ? style.orangeCircleLight : style.blueCircleLight}`}>
                                        Прошлое значение:
                                    </div>
                                    {Object.values(status.pastValue).map((value, index) => (
                                        <div key={index} className={`${style.comment__pastValueObject}`}>
                                            {value}
                                        </div>
                                    ))}
                                    <div className={`${style.comment__pastValueArrow}`}>
                                        1
                                    </div>
                                </div>
                                <div className={`${style.comment__newValue}`}>
                                    <div
                                        className={`${style.comment__newValueSubtitle} ${status.changeStatus === "changed" ? style.orangeCircleLight : style.blueCircleLight}`}>
                                        Новое значение:
                                    </div>
                                    {Object.values(status.newValue).map((value, index) => (
                                        <div key={index} className={`${style.comment__newValueObject}`}>
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            }
                        </div>
                    }
                </div>
                <div className={`${style.comment__centerBottom}`}>
                    <div className={`${style.comment__centerBottomUser}`}>
                        <img className={style.comment__centerBottomUserImage} src={imgSrc} alt="User image"/>
                        {name}
                    </div>
                    <div className={`${style.comment__centerBottomDate}`}>
                        <div>{date}</div>
                        <div>1 {/*<img src={} alt="Pencil icon"/>*/}</div>
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
