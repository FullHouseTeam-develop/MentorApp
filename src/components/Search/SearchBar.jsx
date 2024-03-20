import React, { useState } from 'react';
import classes from './Search.module.scss';

import lupa from '../../assets/icons/lupa.svg';
import close from '../../assets/icons/close.svg';
import SearchResultsList from './SearchResultList';
import tagstest from '../../assets/json/tagstest.txt'

export const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = React.useState([]);
  const [selectedTags, setSelectedTags] = React.useState([]);
  


  const fetchData = (value) => {
    setResults([]);

    fetch(tagstest)
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((tag) => {
          return (
            tag.name &&
            tag.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSearchResultSelect = (value) => {
    setResults([]);
    setInput("");
    setSelectedTags([...selectedTags, value]);
    
  };

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

    return (
      <div className={classes.search}>

        <div className={classes.search_full}>

            <div className={classes.search_icon}>
              <img src={lupa} alt="Search" />
            </div>

  
          <input
            className={classes.search_input}
            placeholder="Поиск"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        
        <div className={classes.tagsContainer}> {/* Блок для тегов */}
          {selectedTags.map((tag, index) => (
            <div key={index} className={classes.tag}>
              {tag}
              <span className={classes.close_icon} onClick={() => removeTag(tag)}>
                <img src={close} alt="Close" />
              </span>
            </div>
          ))}
        </div>
        
        <div className={classes.search_result}> {/*хрень сбоку как отдельный тег */}
          {results && results.length > 0 && (
            <SearchResultsList results={results} setSelectedValue={handleSearchResultSelect} />
          )}
        </div>
      </div>
    );
          }


export default SearchBar;



// 
// import classes from './Search.module.scss';
// import lupa from '../../assets/icons/lupa.svg';

// function Search() {
//   const [searchValue, setSearchValue] = useState('');

//   const onChangeSearchInput = (event) => {
//     setSearchValue(event.target.value);
//   };

  

//   return (
//     <div className={classes.search}>
//       <div className={classes.search_icon}>
//         <img src={lupa} alt="Search" />
//       </div>
//       <input
//         value={searchValue}
//         onChange={onChangeSearchInput}
//         className={classes.card_input}
//         placeholder="Поиск"
//       />
//     </div>
//   );
// }
// 
