import { createReducer } from 'reduxsauce'
import createState from 'redux-create-state'
import Types from 'types'
import initialState from './initialState.json'

// split reducer and match them later
// no more switch statements
// https://github.com/infinitered/reduxsauce

// createState for immutability
// https://github.com/niklasramo/redux-create-state#examples

export const appOpenend = (state = initialState, { type, payload }) =>
    createState(state, {})

export const HANDLERS = {
    [Types.APP_OPENED]: appOpenend,
}

export default createReducer(initialState, HANDLERS)
