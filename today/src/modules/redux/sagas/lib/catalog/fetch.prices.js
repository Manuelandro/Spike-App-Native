import { put, takeLatest, select } from 'redux-saga/effects'
import { makeCatalogFetched$ } from 'selectors'
import Types from 'types'

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Check if the user has already fetched catalog
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
function* getCatalogFetchedTask() {
    try {
        const catalogFetched$ = yield makeCatalogFetched$()
        const fetched = yield select(catalogFetched$)
        if (!fetched) {
            yield put({
                type: Types.FETCH_PRICES_ESC,
                payload: {
                    log: fetched,
                },
            })
            return yield put({ type: Types.FETCH_PRICES_END })
        }
        return yield put({
            type: Types.FETCH_PRICES_REQ,
            payload: { log: fetched },
        })
    } catch (e) {
        const error = yield { ...e }
        yield put({
            type: Types.FETCH_PRICES_ERR,
            payload: {
                error: error.response.data.message,
                status: error.response.status,
            },
        })
        yield console.log(e)
        return yield put({ type: Types.FETCH_PRICES_END })
    }
}

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Fetch the catalog prices from API
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
function* fetchPricesTask() {
    try {
        const { data } = yield fetch('', {
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
        })

        if (!data.items || data.items.length === 0) {
            yield put({
                type: Types.FETCH_PRICES_ERR,
                payload: data.error,
            })
            return yield put({ type: Types.FETCH_PRICES_END })
        }

        yield put({ type: Types.FETCH_PRICES_SAVE, payload: data.items })
        return yield put({ type: Types.FETCH_PRICES_END })
    } catch (e) {
        const error = yield { ...e }
        yield put({
            type: Types.FETCH_PRICES_ERR,
            payload: {
                error: error.response.data.message,
                status: error.response.status,
            },
        })
        yield console.log(e)
        return yield put({ type: Types.FETCH_PRICES_END })
    }
}

export default function* saga() {
    try {
        yield takeLatest(Types.FETCH_PRICES, getCatalogFetchedTask)
        yield takeLatest(Types.FETCH_PRICES_REQ, fetchPricesTask)
    } catch (e) {
        console.log(e)
    }
}
