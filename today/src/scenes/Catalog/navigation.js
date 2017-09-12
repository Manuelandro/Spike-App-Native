import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

// Screens
import CatalogScreen from './'

const routeConfiguration = {
    CatalogScreen: { screen: CatalogScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'none',
    initialRouteName: 'CatalogScreen',
}

export const CatalogNavigator = StackNavigator(
    routeConfiguration,
    stackNavigatorConfiguration,
)

class TabCatalog extends Component {
    static navigationOptions = {
        tabBarLabel: 'Catalog',
    }

    render() {
        const { tabCatalog, dispatch } = this.props
        return (
            <CatalogNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: tabCatalog,
                })}
            />
        )
    }
}

const mapState = state => ({
    tabCatalog: state.tabCatalog,
})

export default connect(mapState)(TabCatalog)
