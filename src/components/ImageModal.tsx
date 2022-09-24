import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import * as React from 'react';

type Props = {
	imageName: string;
	modalOpen: boolean;
	handleClose: () => void;
};

const boxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	boxShadow: 24
};

export const ImageModal: FC<Props> = ({ imageName, modalOpen, handleClose }) => {
	return (
		<div>
			<Modal
				open={modalOpen}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={boxStyle}>
					<img src={`/image/ticket/${imageName}`} style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
				</Box>
			</Modal>
		</div>
	);
};
