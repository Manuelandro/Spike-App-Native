import { combineReducers } from 'redux'
import appReducer from '../scenes/App/reducer'

import configRouter from './routes'

export default () => {
    const { reducer, middleware, enhancer } = configRouter()
    return {
        rooteReducer: combineReducers({ location: reducer, app: appReducer }),
        routerMiddleware: middleware,
        routerEnhancer: enhancer,
    }
}
