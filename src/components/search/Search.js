import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { fetchCityDetails } from './../../services';

const Search = ({ setSearch , search}) => {
 
  const loadOptions = async (inputValue) => {
    const cityDetails = await fetchCityDetails(inputValue);
    const options = cityDetails.data.map((city) => {
      return {
        value: `${city.latitude} ${city.longitude}`,
        label: `${city.name}, ${city.countryCode}`,
      };
    });

    return {
      options,
    };
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    //console.log(search);
  };

  return (
    <AsyncPaginate className="app__search-bar"
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
