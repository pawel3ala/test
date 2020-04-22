import { AsyncStorage } from 'react-native'
import * as Facebook from 'expo-facebook'

import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
}
    from './types'

export const facebookLogin = () => async dispatch => {

    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        doFacebookLogin(dispatch)
    }
}

const doFacebookLogin = async dispatch => {

    await Facebook.initializeAsync('146155866834289')

    let { type, token } = await Facebook.logInWithReadPermissionsAsync('146155866834289', {
        permissions: ['public_profile']
    })

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL })
    }

    await AsyncStorage.setItem('fb_token', token)
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
}
