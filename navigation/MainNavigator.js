import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../screens/MapScreen'
import DeckScreen from '../screens/DeckScreen'
import ReviewNavigator from '../navigation/ReviewNavigator'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="map" component={MapScreen} />
        <Tab.Screen name="deck" component={DeckScreen} />
        <Tab.Screen name="rewiew" component={ReviewNavigator} />
      </Tab.Navigator>
    )
}
export default MainNavigator