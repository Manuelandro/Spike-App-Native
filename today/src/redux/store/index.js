import { createStore, applyMiddleware, compose } from 'redux'
import { loggerMiddleware } from '../middlewares'
import configReducer from '../reducers'
import configureSagas from '../sagas'

export default function (Navigator) {
    try {
        /* eslint-disable no-underscore-dangle */
        const combEnhancers =
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        /* eslint-enable */

        const rootReducer = configReducer(Navigator)
        const { sagaMiddleware, rootSaga } = configureSagas()
        const enhancers = combEnhancers(
            applyMiddleware(loggerMiddleware, sagaMiddleware),
        )

        const store = createStore(rootReducer, {}, enhancers)

        /* needs to be run after the store's created */
        sagaMiddleware.run(rootSaga)

        return store
    } catch (e) {
        console.log(e)
        return null
    }
}
