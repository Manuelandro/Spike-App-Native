import React from 'react'
import { Provider } from 'react-redux'
import App from './src/app/layout'
import Navigator from './src/app/layout/navigator'
import configureStore from './src/redux/store'

export default function Today() {
    const store = configureStore(Navigator)

    return (
        <Provider store={store}>
            <App store={store} Navigator={Navigator} />
        </Provider>
    )
}
