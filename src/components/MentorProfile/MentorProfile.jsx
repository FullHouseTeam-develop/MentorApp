import React, { useState } from 'react';
import classes from './MentorProfile.module.scss';

const MentorProfile = (props) => {

    const [isEdit, setIsEdit] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [showMentorInfo, setShowMentorInfo] = useState(false);
    const [mentorData, setMentorData] = useState({
        description: props.description || '',
        helpDescription: props.helpDescription || '',
        price: props.price || '',
    });

    const A = setMentorData;



    const toggleEdit = () => {
        setIsEdit((prevEdit) => !prevEdit);
    };

    const handleSaveChanges = () => {
        // логика сохранения изменений
        setIsEdit(false);
    };


    const handleBecomeMentor = () => {
        setShowMentorInfo(true);
    };

    const handleSaveMentorInfo = () => {

        setShowMentorInfo(true);
    };

    const handleCancelMentorInfo = () => {
        setShowMentorInfo(false);

    };
    return (
        <div className={classes.mentor_info}>
            <div className={classes.info_heading}>Карточка ментора</div>

            <div className={classes.add_mentor_tags}>
                <ul>
                    <li>React</li>
                    <li>Python</li>
                </ul>
                <button>Добавить</button>
            </div>

            <div className={classes.form_row}>
                <label>Краткая информация:</label>
                <textarea
                    className={classes.input}
                    value={mentorData.description}
                    onChange={(e) => setMentorData({ ...mentorData, description: e.target.value })}
                />
            </div>


            <div className={classes.form_row}>
                <label>О себе:</label>
                <textarea
                    className={classes.input}
                    value={mentorData.description}
                    onChange={(e) => setMentorData({ ...mentorData, description: e.target.value })}
                />
            </div>
            <div className={classes.form_row}>
                <label>С чем могу помочь:</label>
                <input
                    type="text"
                    className={classes.input}
                    value={mentorData.helpDescription}
                    onChange={(e) => setMentorData({ ...mentorData, helpDescription: e.target.value })}

                />
            </div>

            <div className={classes.form_row}>
                <label>Цена за 1 час:</label>
                <input
                    type="text"
                    className={`${classes.input} ${classes.priceInput}`}
                    value={mentorData.price}
                    onChange={(e) => setMentorData({ ...mentorData, price: e.target.value })}
                />
            </div>
            <div className={classes.buttons}>
                <button className={classes.save_btn} onClick={handleSaveMentorInfo}>Сохранить</button>
                <button className={classes.undo_btn} onClick={handleCancelMentorInfo}>Отмена</button>

            </div>
        </div>
    );
};

export default MentorProfile;