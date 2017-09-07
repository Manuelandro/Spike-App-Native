import { NavigationActions } from 'react-navigation'

export default function configRouter(Navigator) {
    try {
        const initialState = Navigator.router.getStateForAction(
            NavigationActions.init(),
        )

        return function reducer(state = initialState, action) {
            const nextState = Navigator.router.getStateForAction(action, state)
            return nextState || state
        }
    } catch (e) {
        console.log(e)
        return false
    }
}
