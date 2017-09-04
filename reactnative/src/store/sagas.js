import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { safeValues } from '../modules/utils'

export default function configureSagas() {
    const startSagas = ({ ...sagas }) =>
        function* rootSaga() {
            yield safeValues(sagas).map((saga) => {
                try {
                    fork(saga)
                } catch (e) {
                    console.log(e)
                }
            })
        }

    return {
        sagaMiddleware: createSagaMiddleware(),
        rootSaga: startSagas({}),
    }
}
