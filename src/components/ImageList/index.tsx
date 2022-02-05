import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { IPhoto } from '../../types/index';

interface IProps {
  photosList: IPhoto[];
}

export const TitlebarImageList = ({ photosList }: IProps) => {
  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Page 1</ListSubheader>
      </ImageListItem>
      {photosList.map((item) => (
        <ImageListItem key={item.id}>
          <img src={item.url} alt={item.title} loading="lazy" />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}>
                click
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
