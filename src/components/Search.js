import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

import { useDispatch, useSelector } from "react-redux";
import { fetchCities, manageSearchInput } from "../redux/actions/cityAction";

const Search = () => {
  const { cityDetails, search } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const loadOptions = async (inputValue) => {

    
    // const cityDetails = await fetchCityDetails(inputValue);
    dispatch(fetchCities(inputValue));
    console.log(cityDetails);
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
