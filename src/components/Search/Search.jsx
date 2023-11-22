import React from 'react';
import classes from './Search.module.scss';
import lupa from '../../assets/icons/lupa.svg'


function Search(){
    const [searchValue, setSearchValue] = React.useState('');
    const onChangeSearchInput=(event) =>{
        console.log(event.target.value);
      }
    return(
        <div className={classes.search} >
                    <div className={classes.search_icon}>
                        <img src={lupa} />
                    </div>
                    <input className={classes.card_input} onChange={onChangeSearchInput} placeholder="Поиск" />
                </div>
    )
}
export default Search;