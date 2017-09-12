import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from 'Home'
import Catalog from 'Catalog'

/*

export const DrawerNav = StackNavigator(
    {
        DRAWERSTACK: {
            screen: DrawerStack,
        },
    },
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: 'rgb(255, 255, 255)' },
            title: 'Today',
            headerLeft: (
                <Text onPress={() => navigation.navigate('DrawerToggle')}>
                    Menu
                </Text>
            ),
        }),
    },
)

export default StackNavigator(
    {
        DRAWER: {
            screen: DrawerNav,
        },
    },
    {
        headerMode: 'none',
        initialRouteName: 'DRAWER',
    },
)
*/

/* export default DrawerNavigator(
    {
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
    },
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: 'rgb(255, 255, 255)' },
            headerLeft: (
                <Text onPress={() => navigation.navigate('DrawerToggle')}>
                    Menu
                </Text>
            ),
        }),
    },
) */

export const Stack = StackNavigator({
    HOME: {
        screen: Home,
    },
    CATALOG: {
        screen: Catalog,
    },
})

export default DrawerNavigator(
    {
        HOME: {
            screen: Home,
            navigationOptions: {
                drawer: {
                    label: 'Home',
                },
            },
        },
        CATALOG: {
            screen: Catalog,
            navigationOptions: {
                drawer: {
                    label: 'Catalog',
                },
            },
        },
    },
    {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: 'rgb(255, 255, 255)' },
            headerLeft: (
                <Text onPress={() => navigation.navigate('DrawerToggle')}>
                    Menu
                </Text>
            ),
        }),
    },
)
