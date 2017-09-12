import { put, takeLatest, select } from 'redux-saga/effects'
import { makeCatalogFetched$ } from 'selectors'
import Types from 'types'

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Task listen stock changed from websocket
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function* stockChangedSocketTask(action) {
    try {
        const data = yield action.payload
        return yield put({ type: Types.FETCH_STOCK_SAVE, payload: data })
    } catch (e) {
        return yield console.log(e)
    }
}

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Fetch stock manually flow
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

function* getCatalogFetchedTask() {
    try {
        const catalogFetched$ = yield makeCatalogFetched$()
        const fetched = yield select(catalogFetched$)
        if (!fetched) {
            yield put({
                type: Types.FETCH_STOCK_ESC,
                payload: {
                    log: fetched,
                },
            })
            return yield put({ type: Types.FETCH_STOCK_END })
        }
        return yield put({
            type: Types.FETCH_STOCK_REQ,
            payload: { log: fetched },
        })
    } catch (e) {
        const error = yield { ...e }
        yield put({
            type: Types.FETCH_STOCK_ERR,
            payload: {
                error: error.response.data.message,
                status: error.response.status,
            },
        })
        yield console.log(e)
        return yield put({ type: Types.FETCH_STOCK_END })
    }
}

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Fetch the catalog inventory from API
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
function* fetchStockTask() {
    try {
        const { data } = yield fetch('')

        if (!data || data.length === 0) {
            yield put({
                type: Types.FETCH_STOCK_ERR,
                payload: data,
            })
            return yield put({ type: Types.FETCH_STOCK_END })
        }
        yield put({ type: Types.FETCH_STOCK_SAVE, payload: data })
        return yield put({ type: Types.FETCH_STOCK_END })
    } catch (e) {
        const error = yield { ...e }
        yield put({
            type: Types.FETCH_STOCK_ERR,
            payload: {
                error: error.response.data.message,
                status: error.response.status,
            },
        })
        yield console.log(e)
        return yield put({ type: Types.FETCH_STOCK_END })
    }
}

export default function* saga() {
    try {
        yield takeLatest(Types.SOCKET_STOCK_CHANGED, stockChangedSocketTask)
        yield takeLatest(Types.FETCH_STOCK, getCatalogFetchedTask)
        yield takeLatest(Types.FETCH_STOCK_REQ, fetchStockTask)
    } catch (e) {
        yield console.log(e)
    }
}
