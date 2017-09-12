import React from 'react'
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import TabHome from 'Home/navigation'
import TabCatalog from 'Catalog/navigation'

const route = {
    TabHome: { screen: TabHome },
    TabCatalog: { screen: TabCatalog },
}

const config = {
    drawerWidth: 200,
    drawerPosition: 'left',
    contentOptions: {
        activeTintColor: '#e91e63',
    },
}

const Drawer = DrawerNavigator(route, config)

export const drawerReducer = (state, action) => Drawer.router.getStateForAction(action, state)

const DrawerNavigation = props => (
    <Drawer
        navigation={addNavigationHelpers({
            dispatch: props.dispatch,
            state: props.tabBar,
        })}
    />
)

const mapState = state => ({
    drawer: state.drawer,
})

export default connect(mapState)(DrawerNavigation)
