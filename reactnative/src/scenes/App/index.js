import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationBar } from '@shoutem/ui'

const App = props => (
    <View style={styles.container}>
        <NavigationBar
            leftComponent={<Text>Menu</Text>}
            centerComponent={<Text>Today</Text>}
        />
        <Text>aaa</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App
