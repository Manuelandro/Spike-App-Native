import { AppRegistry } from 'react-native'
import Today from './Today'
import configSentry from './sentry'

configSentry()
AppRegistry.registerComponent('today', () => Today)
