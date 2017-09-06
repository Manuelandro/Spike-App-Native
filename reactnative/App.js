import React from 'react'
import { Provider } from 'react-redux'
import Navigator from './src/scenes/App/navigator'

import configureStore from './src/store'
import App from './src/scenes/App'

export default function TodayApp() {
    const store = configureStore(Navigator)

    return (
        <Provider store={store}>
            <App store={store} Navigator={Navigator} />
        </Provider>
    )
}
