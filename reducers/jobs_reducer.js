import { FETCH_JOBS, DELETE_JOBS } from '../actions/types'


const INITIAL_STATE = {
    jobs: []
}
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_JOBS:
            return action.payload
        default:
            return state
    }
}