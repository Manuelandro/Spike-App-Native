import React from 'react'
import { Provider } from 'react-redux'
import App from 'App/layout'
import Navigator from 'App/layout/navigator'
import configureStore from './src/store'

export default function Today() {
    const store = configureStore(Navigator)

    return (
        <Provider store={store}>
            <App store={store} Navigator={Navigator} />
        </Provider>
    )
}
