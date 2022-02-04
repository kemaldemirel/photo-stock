import React, { FC } from 'react';
import { useAppSelector } from '../hooks';

const Home: FC = () => {
  const { isLoading, photos, error } = useAppSelector((state) => state.photos);
  return <div>1</div>;
};

export default Home;
