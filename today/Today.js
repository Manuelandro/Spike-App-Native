import React from 'react'
import { Provider } from 'react-redux'
import App from 'App'
import Navigator from 'App/navigator'
import configureStore from './src/store'

export default function Today() {
    const store = configureStore(Navigator)

    return (
        <Provider store={store}>
            <App store={store} Navigator={Navigator} />
        </Provider>
    )
}
