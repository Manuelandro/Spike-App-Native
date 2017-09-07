import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from '../Home'
import Catalog from '../Catalog'

export const DrawerStack = DrawerNavigator(
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
                <Text onPress={() => navigation.navigate('DrawerOpen')}>
                    Menu
                </Text>
            ),
        }),
    },
)

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
                <Text onPress={() => navigation.navigate('DrawerOpen')}>
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
