import React from 'react';
import { TextField, Stack } from '@mui/material';

interface SearchProps {
  searchValue: null | string;
  setSearchValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
  return (
    <Stack sx={{ width: 300, marginBottom: '25px' }}>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        label="Search..."
      />
    </Stack>
  );
};

export default Search;
