import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ClothesItem from '../ClothesItem';
import Skeleton from './Skeleton';
import Search from '../Search/Search';
import PaginationComponent from '../Pagination/PaginationComponent';
import { IClothes } from '../../models';
import { useAppDispatch, useAppSelector } from '../../hook';
import { setCategoryId } from '../../redux/slices/filterSlice';

const clothesFor: string[] = ['All clothes', 'Men', 'Women', 'Kids'];

const ShopProducts: React.FC = () => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector((state) => state.filter.categoryId);

  const [data, setData] = useState<IClothes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<null | string>('');
  const [page, setPage] = useState<number>(1);
  const [pageQty, setPageQty] = useState<number>(0);

  useEffect((): void => {
    setIsLoading(true);
    axios
      .get<IClothes[]>(
        `https://63a41f0f821953d4f2aa043e.mockapi.io/items?page=${page}&limit=8&${
          categoryId > 0 ? `category=${categoryId}` : ''
        }${searchValue ? `&search=${searchValue}` : ''}`
      )
      .then((response) => {
        setData(response.data);
        setPageQty(3);
        setIsLoading(false);
      });
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
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </Box>
      {isLoading
        ? [...new Array(8)].map(() => <Skeleton key={uuidv4()} />)
        : data.map((item) => <ClothesItem key={uuidv4()} {...item} />)}
      <PaginationComponent page={page} pageQty={pageQty} setPage={setPage} />
    </Container>
  );
};

export default ShopProducts;
