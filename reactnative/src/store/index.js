import { createStore, applyMiddleware, compose } from 'redux'
import configRouter from './routes'

export default function () {
    const combEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const initialState = {}

    const { reducer, middleware, enhancer } = configRouter()
    const enhancers = combEnhancers(applyMiddleware())

    // return createStore(initialState, enhancers)
    return {}
}
