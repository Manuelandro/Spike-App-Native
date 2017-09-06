import React from 'react'
import { Provider } from 'react-redux'
import Sentry from 'sentry-expo'

import Navigator from './src/scenes/App/navigator'
import configureStore from './src/store'
import App from './src/scenes/App'

export default function TodayApp() {
    const store = configureStore(Navigator)
    // Remove this once Sentry is correctly setup.
    Sentry.enableInExpoDevelopment = true

    Sentry.config(
        'https://175662fef5454abc980729aa71eb1e39@sentry.io/212313',
    ).install()

    return (
        <Provider store={store}>
            <App store={store} Navigator={Navigator} />
        </Provider>
    )
}
