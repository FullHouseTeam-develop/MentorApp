import React, { useState } from 'react';
import classes from './SearchResultList.module.scss';

import { SearchResult } from "./SearchResult";

export const SearchResultsList = ({ results, setSelectedValue }) => {
  
  return (
    <div className={classes.resultss}>
      {results.map((result, id) => {
        return <div
        className={classes.search-result}
        onClick={(e) => setSelectedValue(result.name)}
      >
        {result.name}
      </div>;
      })}
    </div>
  );
};

export default SearchResultsList;