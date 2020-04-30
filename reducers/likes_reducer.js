import { LIKE_JOB, DELETE_JOBS } from '../actions/types'
import _ from 'lodash'
import { REHYDRATE } from 'redux-persist/lib/constants'

export default function (state = [], action) {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.likedJob || []
        case DELETE_JOBS:
            return []
        case LIKE_JOB:
            return _.uniqBy([action.payload, ...state], 'jobkey')
        default:
            return state
    }
}
