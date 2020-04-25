import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../actions'

const AuthScreen = (props) => {

    const dispatch = useDispatch()
    const token = useSelector(({ auth }) => auth.token)

    useEffect(() => {
        if (!token) dispatch(actions.facebookLogin())
    }, [])

    if (token) {
        props.navigation.navigate('Main')
    }
    return (
        <View />
    )
}

export default AuthScreen
