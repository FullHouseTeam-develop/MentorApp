import React from 'react';
import classes from './Search.module.scss';
import lupa from '../../assets/icons/lupa.svg'


function Search(){
    return(
        <div className={classes.search} >
                    <div className={classes.search_icon}>
                        <img src={lupa} />
                    </div>
                    <input className={classes.card_input} placeholder="Поиск" />
                </div>
    )
}
export default Search;