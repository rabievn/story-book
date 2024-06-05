import React, {useEffect, useState} from 'react';
import style from "./TaskCard.module.scss";
import Checkbox, {CheckboxColorType, CheckboxSizeType} from "../Checkbox/Checkbox";
import calendar from "./icons/calendar.svg";
import notificationIcon from "./icons/notification.svg";
import Avatar, {AvatarColorType} from "../Avatar/Avatar";

type CardStatusType = "Новая" | "В работе" | "Срок истекает" | "Просрочена";

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
    avatarTheme: AvatarColorType
    city: string
    notification: number
    cardStatus: CardStatusType
    office: string
    onMoreButton: () => void
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
                                              office = "001.0",
                                              onMoreButton
                                          }) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const statusClass =
        cardStatus === "Новая" ? style.green :
            cardStatus === "В работе" ? style.pink :
                cardStatus === "Срок истекает" ? style.orange : cardStatus === "Просрочена" ? style.red : "";


    useEffect(() => {
        setIsChecked(defaultChecked);
    }, [defaultChecked]);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };
    return (
        <div className={`${style.taskCard} ${isDark && style.taskCardDark}`}>
            <div className={`${style.taskCard__left}`}>
                <div className={`${style.taskCard__index}`}>
                    {numeric}
                </div>
                <div className={`${style.taskCard__userPhoto}`}>
                    <Avatar avatarTheme={avatarTheme} size={"medium"}>
                        {imgSrc
                            ? <img className={style.taskCard__userImage} src={imgSrc} alt="User image"/>
                            : user.name[0]
                        }
                    </Avatar>
                </div>
            </div>
            <div className={`${style.taskCard__main}`}>
                <div className={`${style.taskCard__header}`}>
                    <div
                        className={`${style.taskCard__status} ${statusClass}`}>
                        {cardStatus}
                    </div>
                    <div className={`${style.taskCard__headerButtons}`}>
                        <button className={`${style.taskCard__moreOptions}`} onClick={onMoreButton}>
                            <span/><span/><span/>
                        </button>
                        <div className={`${style.taskCard__selectCheckbox}`}>
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
                <div className={`${style.taskCard__name}`}>
                    {user.name}
                </div>
                <div className={`${style.taskCard__date}`}>
                    {date} <img src={calendar} alt="Calendar icon"/>
                </div>
                <div className={`${style.taskCard__description}`}>
                    {description}
                </div>
                <div className={`${style.taskCard__footer}`}>
                    <div className={`${style.taskCard__footerNumber}`}>{office}</div>
                    <div className={`${style.taskCard__footerCity}`}>{city}</div>
                    <div className={`${style.taskCard__footerNotification} ${!notification && style.taskCard__notificationInvisible}`}>
                        <img className={`${style.taskCard__footerNotificationImg}`} src={notificationIcon}
                             alt="Notification icon"/>
                        <div className={`${style.taskCard__footerNotificationNumber}`}>
                            {notification}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TaskCard;