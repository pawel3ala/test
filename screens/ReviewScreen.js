import React from 'react'
import { Text, View, Linking, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card, Button } from 'react-native-elements'
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';

const ReviewScreen = (props) => {

    const likedJobs = useSelector(({ likedJobs }) => likedJobs)
    
    const renderLikedJobs = () => {

        return (
            likedJobs.map(job => {
                const { company, formattedRelativeTime, url,
                    longitude, latitude, jobtitle, jobkey } = job

                const initialRegion = {
                    longitude,
                    latitude,
                    longitudeDelta: 0.04,
                    latitudeDelta: 0.09
                }
                return (
                    <Card title={jobtitle} key={jobkey}>
                        <View style={{ height: 200 }}>
                            <MapView
                                style={{ flex: 1 }}
                                cacheEnabled={Platform.OS === 'android'}
                                scrollEnabled={false}
                                initialRegion={initialRegion}
                            />
                            <View style={styles.detailWrapper}>
                                <Text style={styles.italics}>{company}</Text>
                                <Text style={styles.italics}>{formattedRelativeTime}</Text>
                            </View>
                            <Button
                                title="Apply Now"
                                backgroundColor="#03A9F4"
                                onPress={() => Linking.openURL(url)}
                            />
                        </View>
                    </Card>
                )
            })
        )
    }
    return (
        <ScrollView>
            {renderLikedJobs()}
        </ScrollView>
    )
}
const styles = {
    italics: {
        fontStyle: 'italic'
    },
    detailWrapper: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'

    }
}
export default ReviewScreen
