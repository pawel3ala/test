import {
    FETCH_JOBS,
    LIKE_JOB,
    DELETE_JOBS
}
    from './types'
import axios from 'axios'
import reverseGeocode from 'latlng-to-zip'
import qs from 'qs'
import fakeResponse from '../fakeData'
import store from '../store'

const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?'
const JOB_QUERY_PARAMS = {
    publisher: '4201738803816157',
    format: 'json',
    v: '2',
    latlong: 1,
    radius: 10,
    q: 'javascript'
}

const buildJobsUrl = zip => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip })
    return `${JOB_ROOT_URL}${query}`
}

export const fetchJobs = (region, callback) => async dispatch => {
    try {
        // let zip = await reverseGeocode(region, "API_KEY")
        // const url = buildJobsUrl(zip)
        // let { data } = await axios.get(url)

        let { results } = fakeResponse(fakeResponse)

        dispatch({ type: FETCH_JOBS, payload: results })
        callback()

    } catch (error) {
        console.log(error)
    }
}

export const likeJob = job => ({
    type: LIKE_JOB,
    payload: job
})

export const clearLikedJobs = () => {
    return {
        type: DELETE_JOBS
    }
}