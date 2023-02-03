import React from 'react';
import { Container, Pagination, Stack } from '@mui/material';

interface PaginationProps {
  page: number;
  pageQty: number;
  setPage: (num: number) => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  page,
  pageQty,
  setPage,
}) => {
  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
    >
      <Stack spacing={2}>
        {!!pageQty && (
          <Pagination
            size="large"
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
          />
        )}
      </Stack>
    </Container>
  );
};

export default PaginationComponent;
