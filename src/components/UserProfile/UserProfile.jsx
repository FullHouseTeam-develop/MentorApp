import React, { useState } from 'react';
import classes from './UserProfile.module.scss';

const UserProfile = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prevEdit) => !prevEdit);
  };

  return (
    <div className={classes.user_profile}>
      <div className={classes.user_info}>
        <div className={classes.user_image}>
          <img src={props.imageUrl} alt="user" />
        </div>

        <div className={classes.buttons}>
          <button
            className={`${classes.edit_profile_button} ${isEdit ? classes.editing : ''}`}
            onClick={toggleEdit}
          >
            {isEdit ? 'Завершить редактирование' : 'Редактировать профиль'}
          </button>
          <button className={classes.become_mentor_button}>Стать ментором</button>
        </div>
      </div>

      <div className={classes.personal_info}>
        <div className={classes.info_heading}>Личная информация</div>
        <div className={classes.form}>
          <div className={classes.form_row}>
            <label>Имя:</label>
            <input
              type="text"
              className={`${!isEdit ? classes.inputDisabled : ''} ${classes.input}`}
              value={props.firstName}
              disabled={!isEdit}
            />
          </div>
          <div className={classes.form_row}>
            <label>Фамилия:</label>
            <input
              type="text"
              className={`${!isEdit ? classes.inputDisabled : ''} ${classes.input}`}
              value={props.lastName}
              disabled={!isEdit}
            />
          </div>
          <div className={classes.form_row}>
            <label>email:</label>
            <input
              type="email"
              className={`${!isEdit ? classes.inputDisabled : ''} ${classes.input}`}
              value={props.email}
              disabled={!isEdit}
            />
          </div>
          <div className={classes.form_row}>
            <label>О себе:</label>
            <textarea
              className={`${!isEdit ? classes.inputDisabled : ''} ${classes.input}`}
              value={props.description}
              disabled={!isEdit}
            />
          </div>
          <div className={classes.form_row}>
            <label>Ссылка на соц. сеть:</label>
            <input
              type="text"
              className={`${!isEdit ? classes.inputDisabled : ''} ${classes.input}`}
              value={props.socialLink}
              disabled={!isEdit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
