import { connectRoutes } from 'redux-first-router'
import createMemoryHistory from 'history/createMemoryHistory'

export default function () {
    const history = createMemoryHistory()
    const routesMap = {
        HOME: '/',
        CATALOG: 'catalog/',
        CHECKOUT: 'checkout/',
    }

    const { reducer, middleware, enhancer } = connectRoutes(history, routesMap)

    return { reducer, middleware, enhancer }
}
