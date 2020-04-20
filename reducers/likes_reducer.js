import { LIKE_JOB, DELETE_JOBS } from '../actions/types'
import _ from 'lodash'

export default function (state = [], action) {
    switch (action.type) {
        case DELETE_JOBS:
            return []
        case LIKE_JOB:
            return _.uniqBy([action.payload, ...state], 'jobkey')
        default:
            return state
    }
} 