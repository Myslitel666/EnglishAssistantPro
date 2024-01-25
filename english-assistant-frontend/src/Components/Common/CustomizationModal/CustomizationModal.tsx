import * as React from 'react';

//MUI Import
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from '@mui/material/styles';

//MyComponents Import
import CustomizationModalContent from '../CustomizationModal/CustomizationModalContent'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    return (
        <div>
            <Button onClick={handleOpen}>
                <SettingsOutlinedIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CustomizationModalContent />    
                </Box>
            </Modal>
        </div>
    );
}
