import createState from 'redux-create-state'
import initialState from './initialState.json'

// https://github.com/niklasramo/redux-create-state#examples
export default (state = initialState, { type, payload }) => {
    switch (type) {
        default:
            return state
    }
}
