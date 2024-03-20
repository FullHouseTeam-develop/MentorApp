import React, { useState } from 'react';
import classes from './UserProfile.module.scss';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prevEdit) => !prevEdit);
  };

  const handleSaveChanges = () => {
    // логика сохранения изменений
    setIsEdit(false);
  };

  const handleEditPhoto = () => {
    // Заглушка1
    if(isEdit){
    console.log('Редактировать фото');
    }
  };

  const handleDeletePhoto = () => {
    // Заглушка2
    if(isEdit){
    console.log('Удалить фото');
    }
  };

  const handleMouseEnter = () => {
    setShowOptions(true);
  };

  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  return (
    <div className={classes.user_profile}>
      <div className={classes.user_status}>
          Профиль {isEdit && <span className={classes.editingStatus}>Редактирование</span>}
      </div>
      <div className={classes.tmp}>
        <div className={classes.user_info}>
          <div
            className={classes.user_image}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={props.imageUrl} alt="user" />
            {isEdit && (
              <div className={classes.edit_options}>
                <button onClick={handleEditPhoto} className={classes.change_photo}>Выбрать фото</button>
                <button onClick={handleDeletePhoto} className={classes.delete_photo}>Удалить</button>
              </div>
            )}
          </div>

          <div className={classes.buttons}>
            {!isEdit && (
              <Link to="/PageMentorProfile"><button className={classes.become_mentor_button}>Стать ментором</button></Link>
            )}
          </div>
        </div>


        <div className={classes.personal_info}>
          <div className={classes.info_heading}>Личная информация</div>
          <div className={classes.form}>
            <div className={classes.form_row}>
              <label>Имя</label>
              <input
                type="text"
                className={`${!isEdit ? classes.input_non_edit : ''} ${classes.input_edit}`}
                // value={props.firstName}
                disabled={!isEdit}
              />
            </div>
            <div className={classes.form_row}>
              <label>Фамилия</label>
              <input
                type="text"
                className={`${!isEdit ? classes.input_non_edit : ''} ${classes.input_edit}`}
                // value={props.lastName}
                disabled={!isEdit}
              />
            </div>
            <div className={classes.form_row}>
              <label>Email</label>
              <input
                type="email"
                className={`${!isEdit ? classes.input_non_edit : ''} ${classes.input_edit}`}
                // value={props.email}
                disabled={!isEdit}
              />
            </div>
            <div className={classes.form_row}>
              <label>Ссылка на социальную сеть</label>
              <input
                type="text"
                className={`${!isEdit ? classes.input_non_edit : ''} ${classes.input_edit}`}
                // value={props.socialLink}
                disabled={!isEdit}
              />
            </div>
            {!isEdit && (
              <div className={classes.edit_button}>
                <button
                  className={`${classes.edit_profile_button} ${isEdit ? classes.editing : ''}`}
                  onClick={toggleEdit}
                >
                  Редактировать
                </button>
              </div>
            )}
            {isEdit && (
              <div className={classes.save_button}>
                <button onClick={handleSaveChanges}>Сохранить</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
