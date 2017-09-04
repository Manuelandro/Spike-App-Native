import React from 'react'
import { AsyncStorage, Text } from 'react-native'
import { persistStore } from 'redux-persist'
import { Font } from 'expo'
import { NavigationBar, Heading, Icon } from '@shoutem/ui'

import { catalogApi } from '../../modules/config'
import { Wrapper } from './style'

class App extends React.Component {
    state = {
        fontReady: false,
        catalogReady: false,
    }

    async componentWillMount() {
        await Font.loadAsync({
            'Rubik-Regular': require('@shoutem/ui/fonts/Rubik-Regular.ttf'), // eslint-disable-line global-require
            'rubicon-icon-font': require('@shoutem/ui/fonts/rubicon-icon-font.ttf'), // eslint-disable-line global-require
        })

        this.setState({ fontReady: true })

        await persistStore(this.props.store, { storage: AsyncStorage })

        await fetch(catalogApi, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(() => this.setState({ catalogReady: true }))
            .catch(() => console.error('fetch'))
    }

    render() {
        if (!this.state.fontReady || !this.state.catalogReady) {
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
