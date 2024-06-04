import React, {useEffect, useState} from 'react';
import styles from "./TaskCard.module.scss";
import style from "../Comment/Comment.module.scss";
import {Avatar} from "@progress/kendo-react-layout";
import Checkbox, {CheckboxColorType, CheckboxSizeType} from "../Checkbox/Checkbox";
import {AvatarType} from "../Comment/Comment";
import calendar from "./icons/calendar.svg";

type TaskCardType = {
    numeric: number
    description: string
    imgSrc: string
    user: {
        name: string
    }
    defaultChecked: boolean
    date: string
    isDark: boolean
    checkboxColor: CheckboxColorType
    checkboxSize: CheckboxSizeType
    avatarTheme: AvatarType
    city: string
    notification: number
    cardStatus: string
    office: string
}

const TaskCard: React.FC<TaskCardType> = ({
                                              numeric = 1,
                                              description = "Обновить анкету клиента финансового учреждения",
                                              imgSrc,
                                              user = {name: "Иванов Руслан Михайлович"},
                                              defaultChecked = false,
                                              date = "07.11.23 - 14.11.23",
                                              checkboxColor = "gray",
                                              checkboxSize = "small",
                                              avatarTheme = "dark",
                                              isDark = false,
                                              city = "Душанбе",
                                              notification = 2,
                                              cardStatus = "Новая",
                                              office = "001.0"
                                          }) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    useEffect(() => {
        setIsChecked(defaultChecked);
    }, [defaultChecked]);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };
    return (
        <div className={`${styles.taskCard}`}>
            <div className={`${styles.taskCard__left}`}>
                <div className={`${styles.taskCard__index}`}>
                    {numeric}
                </div>
                <div className={`${styles.taskCard__userPhoto}`}>
                    <Avatar rounded="full" type="text" themeColor={avatarTheme} size={"medium"}>
                        {imgSrc ?
                            <img className={style.taskCard__userImage} src={imgSrc} alt="User image"/>
                            :
                            user.name[0]
                        }
                    </Avatar>
                </div>
            </div>
            <div className={`${styles.taskCard__main}`}>
                <div className={`${styles.taskCard__header}`}>
                    <div className={`${styles.taskCard__status}`}>
                        {cardStatus}
                    </div>
                    <div className={`${styles.taskCard__headerButtons}`}>
                        <div className={`${styles.taskCard__moreOptions}`}>
                            more
                        </div>
                        <div className={`${styles.taskCard__selectCheckbox}`}>
                            <Checkbox isChecked={isChecked}
                                      onChange={handleCheckboxChange}
                                      checkboxColor={checkboxColor}
                                      isDark={isDark}
                                      className={""}
                                      size={checkboxSize}
                                      rounded={"large"}/>
                        </div>
                    </div>
                </div>
                <div className={`${styles.taskCard__name}`}>
                    {user.name}
                </div>
                <div className={`${styles.taskCard__date}`}>
                    {date} <img src={calendar} alt="Calendar icon"/>
                </div>
                <div className={`${styles.taskCard__description}`}>
                    {description}
                </div>
                <div className={`${styles.taskCard__footer}`}>
                    <div className={`${styles.taskCard__footerNumber}`}>{office}</div>
                    <div className={`${styles.taskCard__footerCity}`}>{city}</div>
                    <div className={`${styles.taskCard__footerNotification}`}>{notification}</div>
                </div>
            </div>
        </div>

    );
}

export default TaskCard;