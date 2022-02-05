import React, { FC } from 'react';
import { TitlebarImageList } from '../components/ImageList';
import Loader from '../components/loader';
import { PaginationRounded } from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchPhotos } from '../redux/actions/fetchPhotos';
import classes from './home.module.scss';

const Home: FC = () => {
  const { isLoading, photos, error } = useAppSelector((state) => state.photos);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={classes.homePge}
      style={{ width: '800px', margin: '0 auto', padding: '10px 0' }}>
      <TitlebarImageList photosList={photos} />
      <PaginationRounded />
    </div>
  );
};

export default Home;
