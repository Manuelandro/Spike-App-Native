export const baseUrl = 'http://dev.today.com/'
export const pageSize = 10

/* API Endpoints */

export const categoryApi = `${baseUrl}rest/default/V1/categories`
export const catalogApi = `${baseUrl}rest/default/V1/products?searchCriteria%5BpageSize%5D=${pageSize}`
