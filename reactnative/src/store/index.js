import { createStore, applyMiddleware, compose } from 'redux'
import configReducer from './reducers'
import configureSagas from './sagas'

export default function () {
    /* eslint-disable no-underscore-dangle */
    const combEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    /* eslint-enable */
    const initialState = {}

    const { rooteReducer, routerMiddleware, routerEnhancer } = configReducer()
    const { sagaMiddleware, rootSaga } = configureSagas()
    const enhancers = combEnhancers(
        routerEnhancer,
        applyMiddleware(routerMiddleware, sagaMiddleware),
    )

    const store = createStore(rooteReducer, initialState, enhancers)

    /* needs to be run after the store's created */
    sagaMiddleware.run(rootSaga)

    return store
}
