import { createTypes } from 'reduxsauce'

export default createTypes(`
    APP_OPENED,

    FETCH_CATALOG,
    FETCH_CATALOG_REQ,
    FETCH_CATALOG_SUCC,
    FETCH_CATALOG_ERR,
    FETCH_CATALOG_SAVE,
    FETCH_CATALOG_END,

    FETCH_STOCK
`)
