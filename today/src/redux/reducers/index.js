import { combineReducers } from 'redux'
import appReducer from '../../app/state/reducer'
import configRouter from '../../app/layout/routes'

export default function configReducer(Navigator) {
    return combineReducers({
        location: configRouter(Navigator),
        app: appReducer,
    })
}
