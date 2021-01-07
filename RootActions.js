export const toggleForm = (onLoad, formType) => {
    return {
        type: 'TOGGLE_FORM', 
        payload: {
            onLoad: onLoad, 
            formType: formType
        }
    }
}