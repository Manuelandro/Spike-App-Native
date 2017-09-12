import React from 'react'
import { addNavigationHelpers, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import TabHome from 'Home/navigation'
import TabCatalog from 'Catalog/navigation'

const route = {
    TabHome: { screen: TabHome },
    TabCatalog: { screen: TabCatalog },
}

const config = {
    tabBarOptions: {
        // tint color is passed to text and icons (if enabled) on the tab bar
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        // background color is for the tab component
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
    },
}

const TabBar = TabNavigator(route, config)

export const tabBarReducer = (state, action) => {
    if (action.type === 'JUMP_TO_TAB') {
        return { ...state, index: 0 }
    }
    return TabBar.router.getStateForAction(action, state)
}

const TabBarNavigation = props => (
    <TabBar
        navigation={addNavigationHelpers({
            dispatch: props.dispatch,
            state: props.tabBar,
        })}
    />
)

const mapState = state => ({
    tabBar: state.tabBar,
})

export default connect(mapState)(TabBarNavigation)
