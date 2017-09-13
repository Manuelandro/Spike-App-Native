import React from 'react'
import { AsyncStorage } from 'react-native'
import { persistStore } from 'redux-persist'
import { connect } from 'react-redux'
import { catalogApi } from 'today-modules/config'
import DropdownAlert from 'react-native-dropdownalert'
// import DrawerNavigation from './navigation/drawer'
import TabBarNavigation from './navigation/tabBar'
import { Container } from './style'

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
            .catch((e) => {
                /* TODO: notify user connection error */
                this.dropdown.alertWithType('error', 'Error', `${e}`)
                this.setState({ catalogReady: true })
            })
    }

    render() {
        return (
            <Container>
                {this.state.catalogReady && <TabBarNavigation />}
                <DropdownAlert
                    ref={(ref) => {
                        this.dropdown = ref
                    }}
                    onClose={() => {}}
                />
            </Container>
        )
    }
}

const mapState = state => ({
    location: state.location,
})

export default connect(mapState)(App)
