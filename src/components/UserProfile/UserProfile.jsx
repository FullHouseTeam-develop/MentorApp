import React, { useState } from 'react';
import classes from './UserProfile.module.scss';
import { Link } from 'react-router-dom';

const UserProfile = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isBecomeMentor, setIsBecomeMentor] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleEdit = () => {
    setIsEdit((prevEdit) => !prevEdit);
  };

  const toggleBecomeMentor = () => {
    setIsBecomeMentor((prevBecomeMentor) => !prevBecomeMentor);
  };

  const handleSaveChanges = () => {
    // логика сохранения изменений
    setIsEdit(false);
  };

  const handleEditPhoto = () => {
    // Добавить логику выбора фото
    if(isEdit){
    console.log('Редактировать фото');
    }
  };

  const handleDeletePhoto = () => {
    // Добавить логику удаления фото
    if(isEdit){
    console.log('Удалить фото');
    }
  };

  // const handleMouseEnter = () => {
  //   setShowOptions(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowOptions(false);
  // };

  return (
    <div className={classes.user_profile}>
      <div className={classes.user_status}>
          Профиль {isBecomeMentor && <span className={classes.user_status}> ментора</span>} {isEdit && <span className={classes.editingStatus}>Редактирование</span>}
      </div>
      <div className={classes.tmp}>
        <div className={classes.user_info}>
          <div
            className={classes.user_image}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
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
              !isBecomeMentor && <button className={classes.become_mentor_button} onClick={toggleBecomeMentor}>Стать ментором</button> ||
              isBecomeMentor && <button className={classes.become_mentor_button} onClick={toggleBecomeMentor}>Перестать быть ментором</button>
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
            {/* <div className={classes.form_row}>
              <label>Фамилия</label>
              <input
                type="text"
                className={`${!isEdit ? classes.input_non_edit : ''} ${classes.input_edit}`}
                // value={props.lastName}
                disabled={!isEdit}
              />
            </div> */}
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
            
            {isBecomeMentor && (
              <div className={classes.mentor_info}>
                <div className={classes.info_heading}>Карточка ментора</div>
                <div className={classes.form_row}>
                  <label>Теги</label>
                </div>
                <div className={classes.mentor_tags}>
                  <ul className={classes.mentor_tags_ul}>
                      <li className={classes.mentor_tags_li}>React</li>
                      <li className={classes.mentor_tags_li}>Python</li>
                      {isEdit && <button className={classes.mentor_tags_button}> + Добавить</button>}
                  </ul>
                </div>
  
                {/* <div className={classes.form_row}>
                  <label>Краткая информация</label>
                  <textarea
                      className={`${!isEdit ? classes.textarea_non_edit : ''} ${classes.textarea_edit}`}
                      //value={mentorData.description}
                      //onChange={(e) => setMentorData({ ...mentorData, description: e.target.value })}
                      disabled={!isEdit}
                  />
                </div> */}
  
  
                <div className={classes.form_row}>
                  <label>О себе</label>
                  <textarea
                      className={`${!isEdit ? classes.textarea_non_edit : ''} ${classes.textarea_edit}`}
                      //value={mentorData.description}
                      //onChange={(e) => setMentorData({ ...mentorData, description: e.target.value })}
                      disabled={!isEdit}
                  />
              </div>
              <div className={classes.form_row}>
                  <label>С чем могу помочь</label>
                  <textarea
                      type="text"
                      className={`${!isEdit ? classes.textarea_non_edit : ''} ${classes.textarea_edit}`}
                      //value={mentorData.helpDescription}
                      //onChange={(e) => setMentorData({ ...mentorData, helpDescription: e.target.value })}
                      disabled={!isEdit}
                  />
              </div>
  
              <div className={classes.form_row}>
                  <label>Цена</label>
              </div>
              <input
                      type="text"
                      className={`${!isEdit ? classes.input_price_non_edit : ''} ${classes.input_price_edit}`}
                      //value={mentorData.price}
                      //onChange={(e) => setMentorData({ ...mentorData, price: e.target.value })}
                      disabled={!isEdit}
                  />
          </div>
            )}
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
