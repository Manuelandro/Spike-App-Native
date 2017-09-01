import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { Icon, NavigationBar } from '@shoutem/ui'

import configureStore from './src/store'

const store = {}

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <NavigationBar
                        leftComponent={<Text>Menu</Text>}
                        centerComponent={<Text>Today</Text>}
                    />
                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reloadee.</Text>
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
