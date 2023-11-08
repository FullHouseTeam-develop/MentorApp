import React from 'react';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import { Search } from '@mui/icons-material';
    function Header() {
        return (
            <div className='wrapper clear'>
                <header className='header'>
                    <div className='logo'>
                        <img src="https://flomaster.top/uploads/posts/2022-07/1657396841_36-flomaster-club-p-visloukhii-kot-risunok-krasivo-41.jpg" width="40" />
                        </div>
                        <div className='headerInfo'>
                            <h3 className='text-uppercase'>Mentor App</h3>
                            <span className='findLink' style={{ marginLeft: '20px' }}>Найти</span>
                        </div>


                    <ul className='d-flex mr-30'>
                        <li className='mr-30'>
                            <TextsmsOutlinedIcon />
                        </li>
                        <li className='mr-30'>
                            < NotificationsNoneIcon />
                        </li>
                        <li className='mr-30'>
                            <PermIdentityOutlinedIcon />
                        </li>
                    </ul>
                </header>

                <div className='search d-flex align-center'>
                    <div className="search-icon">
                        <Search />
                    </div>
                    <input className="card-input" placeholder="Поиск" />
                </div>
        </div>
    );
}

export default Header;
