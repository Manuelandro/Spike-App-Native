import React, { Component } from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

// Screens
import HomeScreen from './'

const routeConfiguration = {
    HomeScreen: { screen: HomeScreen },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
    headerMode: 'float',
    initialRouteName: 'HomeScreen',
}

export const HomeNavigator = StackNavigator(
    routeConfiguration,
    stackNavigatorConfiguration,
)

class TabHome extends Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
    }

    render() {
        const { tabHome, dispatch } = this.props
        return (
            <HomeNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: tabHome,
                })}
            />
        )
    }
}

const mapState = state => ({
    tabHome: state.tabHome,
})

export default connect(mapState)(TabHome)
