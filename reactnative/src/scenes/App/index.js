import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationBar } from '@shoutem/ui'

import { Wrapper } from './style'

const App = props => (
    <Wrapper>
        <NavigationBar
            leftComponent={<Text>Menu</Text>}
            centerComponent={<Text>Today</Text>}
        />
        <Text>aaa</Text>
    </Wrapper>
)

export default App
