import React, { Component } from 'react'
import { View } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { registerScreens } from './screens'

// import { iconsMap, iconsLoaded } from './utils/AppIcons'

const store = configureStore()

registerScreens(store, Provider)

const navigatorStyle = {
    navBarTranslucent: true,
    drawUnderNavBar: true,
    navBarTextColor: 'white',
    navBarButtonColor: 'white',
    statusBarTextColorScheme: 'light',
    drawUnderTabBar: true,
}

class App extends Component {
    constructor(props) {
        super(props)
        /* iconsLoaded.then(() => {
            this.startApp()
        }) */
        this.startApp()
    }

    startApp() {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    label: 'Home',
                    screen: 'today.Home',
                    // icon: iconsMap['ios-film-outline'],
                    // selectedIcon: iconsMap['ios-film'],
                    title: 'Home',
                    navigatorStyle,
                    navigatorButtons: {
                        rightButtons: [
                            {
                                title: 'Search',
                                id: 'search',
                                // icon: iconsMap['ios-search'],
                            },
                        ],
                    },
                },
                {
                    label: 'Catalog',
                    screen: 'today.Catalog',
                    // icon: iconsMap['ios-desktop-outline'],
                    // selectedIcon: iconsMap['ios-desktop'],
                    title: 'Catalog',
                    navigatorStyle,
                },
            ],
            tabsStyle: {
                tabBarButtonColor: 'white',
                tabBarSelectedButtonColor: 'white',
                tabBarBackgroundColor: 'black',
            },
        })
    }
}

export default App
