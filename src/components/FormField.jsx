import { TextField } from '@mui/material';

const FormField = ({ field, index, formData, handleChange }) => {
    const { name, label, type, isRequired, disabled } = field;
    const uniqueFieldName = `${name}_${index}`;

    return (
        <TextField
            key={uniqueFieldName} 
            label={label}
            name={uniqueFieldName} 
            value={formData[uniqueFieldName] || ''}
            disabled={disabled}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required={isRequired}
            variant="outlined"
            multiline={type === 'Textarea'}
            rows={type === 'Textarea' ? 4 : 1}
            sx={{ mb: 2 }}
        />
    );
};

export default FormField;
