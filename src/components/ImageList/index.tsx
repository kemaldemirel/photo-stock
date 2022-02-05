import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import { IPhoto } from '../../types/index';

interface IProps {
  photosList: IPhoto[];
  openModal: (id: number) => void;
}

export const TitlebarImageList = ({ photosList, openModal }: IProps) => {
  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Page 1</ListSubheader>
      </ImageListItem>
      {photosList.map((item) => (
        <ImageListItem key={item.id} onClick={() => openModal(item.id)} sx={{ cursor: 'pointer' }}>
          <img src={item.thumbnailUrl} alt={item.title} loading="lazy" />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <Tooltip title="Delete image">
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
