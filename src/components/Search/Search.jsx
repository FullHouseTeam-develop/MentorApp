import React, { useState } from 'react';
import classes from './Search.module.scss';
import lupa from '../../assets/icons/lupa.svg';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={classes.search}>
      <div className={classes.search_icon}>
        <img src={lupa} alt="Search" />
      </div>
      <input
        value={searchValue}
        onChange={onChangeSearchInput}
        className={classes.card_input}
        placeholder="Поиск"
      />
    </div>
  );
}

export default Search;
