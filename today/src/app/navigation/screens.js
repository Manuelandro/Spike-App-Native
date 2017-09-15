import { Navigation } from 'react-native-navigation'
import Home from 'Home'
import Catalog from 'Catalog'
import Drawer from './drawer'

/* eslint-disable import/prefer-default-export */
export function registerScreens(store, Provider) {
    Navigation.registerComponent('today.Home', () => Home)
    Navigation.registerComponent('today.Catalog', () => Catalog)

    Navigation.registerComponent('today.Drawer', () => Drawer)
}
