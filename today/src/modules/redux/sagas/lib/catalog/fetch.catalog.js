import { put, takeLatest } from 'redux-saga/effects'
import { safeKeys } from 'today-modules/utils'
import { ProdSchema } from 'today-modules/schemas'
import pick from 'lodash/pick'
import Types from '../../../types'

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Check if the user has already fetched catalog
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
function* getCatalogFetchedTask() {
    try {
        // TODO: persisted data with expiration
        return yield put({
            type: Types.FETCH_CATALOG_REQ,
        })
    } catch (e) {
        const error = yield { ...e }
        yield put({
            type: Types.FETCH_CATALOG_ERR,
            payload: {
                error: error.response.data.message,
                status: error.response.status,
            },
        })
        return yield put({ type: Types.FETCH_CATALOG_END })
    }
}

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Fetch the catalog from API
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
function* fetchCatalogTask() {
    try {
        const { data } = yield fetch('')

        if (!data) {
            yield put({
                type: Types.FETCH_CATALOG_ERR,
                payload: data,
            })
            return yield put({ type: Types.FETCH_CATALOG_END })
        }

        /* prevent catalog pull error if payload is empty */
        if (safeKeys(data).length === 0) {
            yield put({
                type: Types.FETCH_CATALOG_SAVE,
                payload: [],
            })
            return yield put({ type: Types.FETCH_CATALOG_END })
        }

        const items = yield safeKeys(data).map(val =>
            pick(data[val], ProdSchema),
        )

        yield put({
            type: Types.FETCH_CATALOG_SAVE,
            payload: items,
        })
        return yield put({ type: Types.FETCH_STOCK })
    } catch (e) {
        const error = yield { ...e }
        yield put({
            type: Types.FETCH_CATALOG_ERR,
            payload: {
                error: error.response.data.message,
                status: error.response.status,
            },
        })
        return yield put({ type: Types.FETCH_CATALOG_END })
    }
}

export default function* saga() {
    try {
        yield takeLatest(Types.FETCH_CATALOG, getCatalogFetchedTask)
        yield takeLatest(Types.FETCH_CATALOG_REQ, fetchCatalogTask)
    } catch (e) {
        yield console.log(e)
    }
}
