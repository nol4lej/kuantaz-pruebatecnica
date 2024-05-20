import { Box, Typography, Paper } from '@mui/material';

const SubmittedData = ({ submittedData }) => (
    <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Datos del Formulario:</Typography>
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
);

export default SubmittedData;
