import React from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Font } from 'expo'
import { NavigationBar, Heading, Icon } from '@shoutem/ui'

import { Wrapper } from './style'

class App extends React.Component {
    state = {
        fontReady: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('@shoutem/ui/fonts/Rubik-Regular.ttf'),
            'rubicon-icon-font': require('@shoutem/ui/fonts/rubicon-icon-font.ttf'),
        })

        this.setState({ fontReady: true })

        await fetch()
    }

    render() {
        if (!this.state.fontReady) {
            return <Text>loading</Text>
        }

        return (
            <Wrapper>
                <NavigationBar
                    leftComponent={<Icon name="sidebar" />}
                    centerComponent={<Text>Today</Text>}
                />
                <Heading>Heading</Heading>
                <Text>aaa</Text>
            </Wrapper>
        )
    }
}

export default App
