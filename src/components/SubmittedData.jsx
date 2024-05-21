import { Box, Typography, Paper } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

const SubmittedData = ({ submittedData }) => {
    if (Object.keys(submittedData).length === 0) {
        return (
            <Typography color="error" display="grid" justifyItems="center" justifyContent="center" gap={1} padding={2}>
                <ErrorIcon fontSize="large" />
                No hay datos disponibles
            </Typography>
        );
    }

    return (
        <Box>
            <Paper variant="outlined" sx={{ p: 2, overflowWrap: 'break-word' }}>
                {Object.entries(submittedData).map(([key, value]) => (
                    value && (
                        <Box key={key}>
                            <Typography variant="subtitle1" component="span" fontWeight="bold">
                                {key}:
                            </Typography>{" "}
                            <Typography variant="body2" component="span">
                                {value}
                            </Typography>
                        </Box>
                    )
                ))}
            </Paper>
        </Box>
    )
}

export default SubmittedData;
