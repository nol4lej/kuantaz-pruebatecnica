import { useState } from 'react';
import { Button, Box, Typography, CircularProgress } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import useDynamicFormFetch from '../hooks/useDynamicFormFetch';
import FormField from './FormField';
import SubmittedData from './SubmittedData';

const DynamicForm = () => {
    const { formFields, isLoading, error } = useDynamicFormFetch();
    const [formData, setFormData] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const submittedDataWithLabels = {};
        formFields.forEach((field, index) => {
            const { name, label } = field;
            const uniqueFieldName = `${name}_${index}`;
            if(formData[uniqueFieldName]){
                submittedDataWithLabels[label] = formData[uniqueFieldName];
            }
            
        });

        setSubmittedData(submittedDataWithLabels);
    };

    return (
        <Box component="form" sx={{ my: 3, bgcolor: '#f5f5f5', p: 4, borderRadius: 8, boxShadow: 3, width: '100%' }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ color: '#333' }}>
                Formulario Dinámico
            </Typography>

            {isLoading && 
                <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
                    <CircularProgress />
                </Box>
            }
            {error && 
                <Typography color="error" align="center" display="flex" alignItems="center" justifyContent="center" gap={1} padding={2}>
                    <ErrorIcon />
                    {error}
                </Typography>
            }

            {!isLoading && !error && (
                <>
                    {formFields.map((field, index) => (
                        <FormField key={index} field={field} index={index} formData={formData} handleChange={handleChange} />
                    ))}
                    <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2, ml: 'auto', display: 'block' }}>
                        Confirmar
                    </Button>
                    {submittedData && <SubmittedData submittedData={submittedData} />}
                </>
            )}
        </Box>
    );
};

export default DynamicForm;
