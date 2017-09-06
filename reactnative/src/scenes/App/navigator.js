import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from '../Home'
import Catalog from '../Catalog'

export default TabNavigator({
    HOME: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
        },
    },
    CATALOG: {
        screen: Catalog,
        navigationOptions: {
            tabBarLabel: 'Catalog',
        },
    },
})
