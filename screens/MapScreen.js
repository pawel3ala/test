import React, { useState } from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import MapView from 'react-native-maps'
import * as actions from '../actions'
import { useDispatch } from 'react-redux'

 const MapScreen = (props) => {

    const dispatch = useDispatch()
    const [region, setRegion] = useState({
        longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    })

    const onButtonPress = () => {
        dispatch(actions.fetchJobs(region, () => {
            props.navigation.navigate("deck")
        }))
    }

    return (
        <View style={{ flex: 1 }}>
            <MapView
                region={region}
                style={{ flex: 1 }}
                onRegionChangeComplete={(region) => setRegion(region)}
            />
            <View style={styles.buttonContainer}>
                <Button
                    large
                    title="Search"
                    backgroundColor="#009688"
                    icon={{ name: 'search' }}
                    onPress={onButtonPress}
                />
            </View>
        </View>
    )
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
}

export default MapScreen
