import React from 'react';
import { View, Text, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MapView from 'react-native-maps';
import { Card, Button } from 'react-native-elements';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

const DeckScreen = (props) => {

  const dispatch = useDispatch()
  const jobs = useSelector(({ jobs }) => jobs)

  function renderCard(job) {
    const initialRegion = {
      longitude: job.longitude || -122,
      latitude: job.latitude || 37,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={job.jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
        </Text>
      </Card>
    );
  }

  const renderNoMoreCards = () => {
    return (
      <Card title="No More Jobs">
        <Button
          title="Back To Map"
          large
          icon={{ name: 'my-location' }}
          backgroundColor="#03A9F4"
          onPress={() => props.navigation.navigate('map')}
        />
      </Card>
    );
  }

  return (
    <View style={{ marginTop: 10 }}>
      <Swipe
        data={jobs}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeRight={job => dispatch(actions.likeJob(job))}
        keyProp="jobkey"
      />
    </View>
  );
}
export default DeckScreen

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};