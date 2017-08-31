import { createStore, applyMiddleware, compose } from 'redux'
import createMemoryHistory from 'history/createMemoryHistory'

export default function () {
    const history = createMemoryHistory()
    const combEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const initialState = {}

    const enhancers = combEnhancers(applyMiddleware())

    return createStore(initialState, enhancers)
}
