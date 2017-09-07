import React from 'react'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { catalogApi } from '../../modules/config'

class App extends React.Component {
    state = {
        catalogReady: false,
    }

    async componentWillMount() {
        await persistStore(this.props.store, { storage: AsyncStorage })

        await fetch(catalogApi, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(() => this.setState({ catalogReady: true }))
            .catch(() => {
                /* TODO: notify user connection error */
                this.setState({ catalogReady: true })
            })
    }

    render() {
        if (!this.state.catalogReady) {
            return null
        }

        const Navigator = this.props.Navigator

        return (
            <Navigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.location,
                })}
            />
        )
    }
}

const mapState = state => ({
    location: state.location,
})

export default connect(mapState)(App)
