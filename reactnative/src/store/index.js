import { createStore, applyMiddleware, compose } from 'redux'
import configReducer from './reducers'

export default function () {
    const combEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const initialState = {}

    const { rooteReducer, routerMiddleware, routerEnhancer } = configReducer()
    const enhancers = combEnhancers(
        routerEnhancer,
        applyMiddleware(routerMiddleware),
    )

    return createStore(rooteReducer, initialState, enhancers)
}
