import { combineReducers } from 'redux'
import { HomeNavigator } from 'Home/navigation'
import { CatalogNavigator } from 'Catalog/navigation'

import appReducer from '../../app/state/reducer'
import { tabBarReducer } from '../../app/layout/navigation/tabBar'
import { drawerReducer } from '../../app/layout/navigation/drawer'

export default function configReducer() {
    return combineReducers({
        app: appReducer,
        tabBar: tabBarReducer,
        drawer: drawerReducer,
        tabHome: (state, action) =>
            HomeNavigator.router.getStateForAction(action, state),
        tabCatalog: (state, action) =>
            CatalogNavigator.router.getStateForAction(action, state),
    })
}
