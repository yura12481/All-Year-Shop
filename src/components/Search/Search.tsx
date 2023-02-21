import React from 'react';
import { TextField, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filter.searchValue);
  return (
    <Stack sx={{ width: 300, marginBottom: '25px' }}>
      <TextField
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        label="Search..."
      />
    </Stack>
  );
};

export default Search;
