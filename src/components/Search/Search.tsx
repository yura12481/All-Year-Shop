import React, { useState, useEffect } from 'react';

import { TextField, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { setSearchValue } from '../../redux/slices/filter/filterSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filter.searchValue);

  const [inputValue, setInputValue] = useState(searchValue || '');

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchValue(inputValue));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Stack sx={{ width: 300, marginBottom: '25px' }}>
      <TextField
        value={inputValue}
        onChange={handleInputChange}
        label="Search..."
      />
    </Stack>
  );
};

export default Search;
