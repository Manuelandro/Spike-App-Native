import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'
import { safeValues } from 'today-modules/utils'
import appSaga from './lib/app'

export { default as appSaga } from './lib/app'

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
        rootSaga: startSagas({
            appSaga,
        }),
    }
}
