import { put, takeLatest } from 'redux-saga/effects'
import Types from 'types'

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Retrieve the customer data needed to use the app
 * © m.palma
 * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
function* userDataFetchTask() {
    try {
        const { data } = yield fetch('')
        if (data.success === 0) {
            yield put({
                type: Types.FETCH_USER_ERR,
                payload: data,
            })
            return yield put({ type: Types.FETCH_USER_END })
        }
        yield put({
            type: Types.FETCH_USER_SAVE,
            payload: data,
        })

        return yield put({ type: Types.FETCH_USER_END })
    } catch (e) {
        yield put({
            type: Types.FETCH_USER_ERR,
            payload: { error: e },
        })
        yield console.log(e)
        return yield put({ type: Types.FETCH_USER_END })
    }
}

export default function* saga() {
    try {
        yield takeLatest(Types.FETCH_USER, userDataFetchTask)
    } catch (e) {
        console.log(e)
    }
}
