import { takeLatest } from 'redux-saga/effects'
import { USER_ARRIVED } from '../../constants'

function* userArrivedTask() {
    try {
        yield console.log('IN')
    } catch (e) {
        console.log(e)
    }
}

export default function* saga() {
    try {
        yield takeLatest(USER_ARRIVED, userArrivedTask)
    } catch (e) {
        console.log(e)
    }
}
