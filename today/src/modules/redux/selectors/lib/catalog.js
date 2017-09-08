import { createSelector } from 'reselect'
import get from 'lodash/get'

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * MEMOIZED CATALOG SELECTORS
 * reselect docs https://github.com/reactjs/reselect
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

/* check if the catalog has been fetched */
export const makeCatalogFetched$ = () =>
    createSelector(s => get(s, 'catalog.fetched'), fetched => fetched)
