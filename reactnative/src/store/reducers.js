import { combineReducers } from 'redux'
import appReducer from '../scenes/App/reducer'

import configRouter from './routes'

export default function configReducer(Navigator) {
    return combineReducers({
        location: configRouter(Navigator),
        app: appReducer,
    })
}
