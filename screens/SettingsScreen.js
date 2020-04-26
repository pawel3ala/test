import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import * as actions from '../actions'

const SettingsScreen = (props) => {

    const dispatch = useDispatch()

    return (
        <View>
            <Button
                title="Delete liked jobs"
                onPress={() => dispatch(actions.clearLikedJobs)}
            />
        </View>
    )
}

export default SettingsScreen
