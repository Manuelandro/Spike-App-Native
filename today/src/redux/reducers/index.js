import { combineReducers } from 'redux'
import appReducer from '../../app/state/reducer'

export default function configReducer() {
    return combineReducers({
        app: appReducer,
    })
}
