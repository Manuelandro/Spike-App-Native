import React from 'react'
import { Provider } from 'react-redux'
import App from './src/app/layout'
import configureStore from './src/redux/store'

export default function Today() {
    const store = configureStore()

    return (
        <Provider store={store}>
            <App store={store} />
        </Provider>
    )
}
