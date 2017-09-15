import React, { Component } from 'react'
import { TouchableOpacity, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import {
    Container,
    DrawerList,
    DrawerListItem,
    DrawerListItemText,
} from './styles'

class Drawer extends Component {
    constructor(props) {
        super(props)

        this.goToMovies = this.goToMovies.bind(this)
        this.openSearch = this.openSearch.bind(this)
    }

    openSearch() {
        this.toggleDrawer()
        this.props.navigator.showModal({
            screen: 'movieapp.Search',
            title: 'Search',
        })
    }

    goToMovies() {
        this.toggleDrawer()
        this.props.navigator.popToRoot({
            screen: 'movieapp.Movies',
        })
    }

    toggleDrawer() {
        this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true,
        })
    }

    render() {
        const iconSearch = (
            <Icon
                name="md-search"
                size={26}
                color="#9F9F9F"
                style={{ paddingLeft: 2 }}
            />
        )
        const iconMovies = (
            <Icon
                name="md-film"
                size={26}
                color="#9F9F9F"
                style={{ paddingLeft: 3 }}
            />
        )
        const iconTV = <Icon name="ios-desktop" size={26} color="#9F9F9F" />
        return (
            <LinearGradient
                colors={[
                    'rgba(0, 0, 0, 0.7)',
                    'rgba(0,0,0, 0.9)',
                    'rgba(0,0,0, 1)',
                ]}
                style={{ flex: 1 }}
            >
                <Container>
                    <DrawerList>
                        <TouchableOpacity onPress={this.openSearch}>
                            <DrawerListItem>
                                {iconSearch}
                                <DrawerListItemText>Search</DrawerListItemText>
                            </DrawerListItem>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToMovies}>
                            <DrawerListItem>
                                {iconMovies}
                                <DrawerListItemText>Movies</DrawerListItemText>
                            </DrawerListItem>
                        </TouchableOpacity>
                        <DrawerListItem>
                            {iconTV}
                            <DrawerListItemText
                                onPress={() =>
                                    ToastAndroid.show(
                                        'Coming Soon!',
                                        ToastAndroid.SHORT,
                                    )}
                            >
                                TV Shows
                            </DrawerListItemText>
                        </DrawerListItem>
                    </DrawerList>
                </Container>
            </LinearGradient>
        )
    }
}

export default Drawer
