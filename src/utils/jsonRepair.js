const jsonRepair = (text) => {
    
    // reemplazar comillas simples por comillas dobles
    text = text.replace(/'/g, '"');

    // eliminar las comas finales antes de los corchetes o llaves de cierre
    text = text.replace(/,(\s*[}\]])/g, '$1');

    // asegurar que las claves esten entre comillas dobles
    text = text.replace(/([{,]\s*)([a-zA-Z0-9_]+)(\s*:)/g, '$1"$2"$3');

    try {
        const fixedJson = JSON.parse(text);
        return fixedJson
    } catch (error) {
        console.error('Error parsing JSON:', error);
    }

}

export default jsonRepair