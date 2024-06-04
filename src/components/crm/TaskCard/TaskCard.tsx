import React from 'react';
import styles from "./TaskCard.module.scss";
import "./TaskCard.scss";

type TaskCardType = {
    numeric: number
}

const TaskCard: React.FC<TaskCardType> = ({}) => {
    return (
        <div className={`${styles.taskCard}`}>
            <div className={`${styles.taskCard__left}`}>
                <div className={`${styles.taskCard__index}`}>
                    numeric
                </div>
                <div className={`${styles.taskCard__userPhoto}`}>
                    user photo
                </div>
            </div>
            <div className={`${styles.taskCard__main}`}>
                <div className={`${styles.taskCard__header}`}>
                    <div className={`${styles.taskCard__status}`}>
                        new
                    </div>
                    <div className={`${styles.taskCard__headerButtons}`}>
                        <div className={`${styles.taskCard__moreOptions}`}>
                            more
                        </div>
                        <div className={`${styles.taskCard__selectCheckbox}`}>
                            checkbox
                        </div>
                    </div>
                </div>
                <div className={`${styles.taskCard__title}`}>
                    name
                </div>
                <div className={`${styles.taskCard__date}`}>
                    date
                </div>
                <div className={`${styles.taskCard__description}`}>
                    text
                </div>
                <div className={`${styles.taskCard__footer}`}>
                    <div className={`${styles.taskCard__footerNumber}`}>001</div>
                    <div className={`${styles.taskCard__footerCity}`}>City</div>
                    <div className={`${styles.taskCard__footerNotification}`}>Noti..</div>
                </div>
            </div>
        </div>

    );
}

export default TaskCard;