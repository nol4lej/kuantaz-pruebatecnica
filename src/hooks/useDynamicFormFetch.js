import { useEffect, useState } from 'react';
import jsonRepair from '../utils/jsonRepair';

const ENDPOINT = 'https://run.mocky.io/v3/5320545a-7539-4c71-9730-8f9f4de3aec6';

const useDynamicFormFetch = () => {
    const [formFields, setFormFields] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (url, options) => {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('La respuesta de la red no fue correcta');
            }
            return response;
        } catch (error) {
            throw new Error('No se pudieron recuperar los datos');
        }
    };

    useEffect(() => {
        const fetchDataWithRetry = async () => {
            try {
                const response = await fetchData(ENDPOINT);
                const data = await response.json();
                setFormFields(data.data);
            } catch (error) {
                try {
                    const response = await fetchData(ENDPOINT);
                    const textData = await response.text();
                    const fixedJson = jsonRepair(textData);
                    setFormFields(fixedJson.data);
                } catch (error) {
                    setError('Error al obtener los datos del formulario');
                } finally {
                    setIsLoading(false);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchDataWithRetry();
    }, []);

    return { formFields, isLoading, error };
};

export default useDynamicFormFetch;
