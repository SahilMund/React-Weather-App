import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { useDispatch, useSelector } from "react-redux";
import { fetchCities, manageSearchInput } from "../redux/actions/cityAction";

const Search = () => {
  const { cityDetails, search } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  // defining function to used by react-select component to show some of the city
  const loadOptions = async (inputValue) => {
    // dispatching an action to fetch the cities
    dispatch(fetchCities(inputValue));

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

  // handling the search input
  const handleOnChange = (searchData) => {
    dispatch(manageSearchInput(searchData));
  };

  return (
    <AsyncPaginate
      className="app__search-bar"
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
