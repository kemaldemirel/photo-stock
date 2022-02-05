import React, { FC } from 'react';
import { TitlebarImageList } from '../components/ImageList';
import Loader from '../components/loader';
import { PaginationRounded } from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchPhotos } from '../redux/actions/fetchPhotos';
import classes from './home.module.scss';

const Home: FC = () => {
  const { isLoading, photos, error } = useAppSelector((state) => state.photos);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [idPhoto, setIdPhoto] = React.useState<number | null>(null);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const openModal = (id: number) => {
    console.log(id);
    setShowModal((prev) => !prev);
    setIdPhoto(id);
  };

  console.log(idPhoto);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={classes.homePge}
      style={{ width: '800px', margin: '0 auto', padding: '10px 0' }}>
      <TitlebarImageList openModal={openModal} photosList={photos} />
      <PaginationRounded />
    </div>
  );
};

export default Home;
