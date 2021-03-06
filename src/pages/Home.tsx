import React, { FC } from 'react';
import { TitlebarImageList } from '../components/ImageList';
import Loader from '../components/loader';
import { BasicModal } from '../components/Modal/BasicModal';
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

  const toggleModal = (id?: number) => {
    setShowModal((prev) => !prev);
    if (id) setIdPhoto(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className={classes.homePge}
      style={{ width: '800px', margin: '0 auto', padding: '10px 0' }}>
      <TitlebarImageList toggleModal={toggleModal} photosList={photos} />
      <PaginationRounded />
      {idPhoto && <BasicModal id={idPhoto} showModal={showModal} toggleModal={toggleModal} />}
    </div>
  );
};

export default Home;
