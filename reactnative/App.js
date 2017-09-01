import React from 'react'
import { Provider } from 'react-redux'

import configureStore from './src/store'
import App from './src/scenes/App'

const store = configureStore()

export default () => (
    <Provider store={store}>
        <App />
    </Provider>
)
