import { takeLatest } from 'redux-saga/effects'
import Types from '../../types'

function* userArrivedTask() {
    try {
        yield console.log('IN')
    } catch (e) {
        console.log(e)
    }
}

export default function* saga() {
    try {
        yield takeLatest(Types.APP_OPENED, userArrivedTask)
    } catch (e) {
        console.log(e)
    }
}
