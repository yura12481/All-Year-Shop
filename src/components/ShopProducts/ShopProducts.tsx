import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ClothesItem from '../ClothesItem';
import Skeleton from './Skeleton';
import Search from '../Search/Search';
import PaginationComponent from '../Pagination/PaginationComponent';
import DataError from '../DataError';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setCategoryId } from '../../redux/slices/filterSlice';
import { fetchClothes } from '../../redux/slices/clothesSlice';

const clothesFor: string[] = ['All clothes', 'Men', 'Women', 'Kids'];

const ShopProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId, page, searchValue } = useAppSelector(
    (state) => state.filter
  );
  const { data, status } = useAppSelector((state) => state.clothes);

  useEffect((): void => {
    dispatch(
      fetchClothes({
        categoryId,
        page,
        searchValue,
      })
    );
  }, [categoryId, searchValue, page]);
  return (
    <Container maxWidth="lg" sx={{ marginTop: '126px' }}>
      <Typography
        sx={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '50px',
          fontWeight: '400',
          lineHeight: '60px',
          color: '#34394C',
          marginBottom: '13px',
        }}
      >
        Featured Product
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: '18px',
            fontWeight: '300',
            lineHeight: '28px',
            color: '#707686',
            maxWidth: '365px',
            marginBottom: '25px',
          }}
        >
          Showing our latest arrival on this summer
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {clothesFor.map((item, indx) =>
            categoryId === indx ? (
              <Typography
                key={uuidv4()}
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '26px',
                  fontWeight: '400',
                  lineHeight: '60px',
                  color: '#34394C',
                  marginBottom: '13px',
                  marginRight: '60px',
                }}
              >
                {item}
              </Typography>
            ) : (
              <Typography
                key={uuidv4()}
                onClick={() => dispatch(setCategoryId(indx))}
                sx={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '26px',
                  fontWeight: '400',
                  lineHeight: '60px',
                  color: '#AFB4C4',
                  marginBottom: '13px',
                  marginRight: '60px',
                  cursor: 'pointer',
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
        <Search />
      </Box>
      {status === 'error' ? (
        <DataError />
      ) : (
        <Box>
          {status === 'loading'
            ? [...new Array(8)].map(() => <Skeleton key={uuidv4()} />)
            : data.map((item) => <ClothesItem key={uuidv4()} {...item} />)}
        </Box>
      )}

      <PaginationComponent />
    </Container>
  );
};

export default ShopProducts;
