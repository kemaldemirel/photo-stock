import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppSelector } from '../../hooks';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IModalProps {
  id: number;
  showModal: boolean;
  toggleModal: () => void;
}

export const BasicModal = ({ id, showModal, toggleModal }: IModalProps) => {
  const { photos } = useAppSelector((state) => state.photos);
  const currentPhoto = photos.find((photo) => photo.id === id);

  return (
    <Modal
      open={showModal}
      onClose={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Title: {currentPhoto?.title}
        </Typography>
        <Typography id="modal-modal-title" variant="subtitle1" component="p">
          Photo ID: {currentPhoto?.id}
        </Typography>
        <Typography id="modal-modal-title" variant="subtitle2" component="p">
          Album ID: {currentPhoto?.albumId}
        </Typography>
        <img
          style={{ width: '100%', height: 'auto' }}
          src={currentPhoto?.url}
          alt={currentPhoto?.title}
        />
      </Box>
    </Modal>
  );
};
