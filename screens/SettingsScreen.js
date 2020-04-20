import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { connect } from 'react-redux'
import { clearLikedJobs } from '../actions'

class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Delete liked jobs"
                    onPress={clearLikedJobs}
                />
            </View>
        )
    }
}

export default connect(null, { clearLikedJobs })(SettingsScreen)
