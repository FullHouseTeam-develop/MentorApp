import React from 'react';

const MentorCard = () => {
  return (
    <div className='card'>
                <div className='card-content'>
                <div className="blue-square"></div>
                    <img src="https://i.pinimg.com/originals/aa/34/bb/aa34bb46682476838eebfb5589350194.jpg" />
                    
                </div>
                <div className='card-info'>
                    <div className='info-top'>
                        <div>Имя Фамилия</div>
                        <div>Описание</div>
                        <ul className='tags'>
                            <li>Тэг1</li>
                            <li>Тэг2</li>
                            <li>Тэг3</li>
                        </ul>
                    </div>
                    <div className='info-bottom'>
                        <div className='price'>
                            <span>Цена:</span>
                            <b>100 руб</b>
                        </div>
                        <button className='button'>написать</button>
                        <button className='button'>еще</button>
                    </div>
                </div>
            </div>

  );
};

export default MentorCard;
