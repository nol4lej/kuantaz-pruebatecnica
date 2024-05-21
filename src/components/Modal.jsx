import { Box, Modal as MuiModal, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const CustomModal = ({ children, title, open, setOpen, width }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
        maxHeight: '90%',
        width: '80%',
        '@media (min-width: 768px)': {
            width: width ? width : 'auto',
        }
    };

    const closeIconStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '8px',
        cursor: 'pointer'
    };

    const titleStyle = {
        borderBottom: '1px solid gray',
        pl: 1,
        pt: 1
    };

    const descriptionStyle = {
        mt: 2,
        maxHeight: 'calc(90vh - 100px)',
        overflowY: 'auto'
    }

    return (
        <MuiModal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <CloseIcon style={closeIconStyle} onClick={() => setOpen(false)} />
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={titleStyle}>
                    {title}
                </Typography>
                <Box id="modal-modal-description" sx={descriptionStyle}>
                    {children}
                </Box>
            </Box>
        </MuiModal>
    );
};

export default CustomModal;
