export const typeCreator = (type) => {
    const TYPE = type.toUpperCase();

    const types = {
        CHANGE_FILTER: `${TYPE}_CHANGE_FILTER`,
        CHANGE_PAGE: `${TYPE}_CHANGE_PAGE`,
        LOAD_DATA: `${TYPE}_LOAD_DATA`,
        LOAD_DATA_FETCH: `${TYPE}_LOAD_DATA_FETCH`,
        LOAD_DATA_SUCCESS: `${TYPE}_LOAD_DATA_SUCCESS`,
        FETCH: `${TYPE}_FETCH`,
        SUCCESS: `${TYPE}_SUCCESS`,
        ERROR: `${TYPE}_ERROR`
    };

}

