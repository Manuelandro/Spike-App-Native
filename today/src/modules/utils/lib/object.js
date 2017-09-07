/* get always an array from the Object.keys method */
export const safeKeys = (obj = {}) => {
    try {
        return Object.keys(obj)
    } catch (e) {
        return []
    }
}

/* get always an array from the Object.values method */
export const safeValues = (obj = {}) => {
    try {
        return Object.values(obj)
    } catch (e) {
        return []
    }
}

/* get always a json object */
export const safeJson = (obj = {}) => {
    try {
        return JSON.parse(obj)
    } catch (e) {
        return null
    }
}
