import { combineReducers } from 'redux'
import appReducer from 'App/store/reducer'
import configRouter from 'App/layout/routes'

export default function configReducer(Navigator) {
    return combineReducers({
        location: configRouter(Navigator),
        app: appReducer,
    })
}
