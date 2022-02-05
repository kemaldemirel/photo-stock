import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const PaginationRounded = () => {
  return (
    <Stack spacing={2} sx={{ marginTop: '10px' }}>
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
};
