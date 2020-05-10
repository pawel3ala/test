import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen'
import ReviewScreen from '../screens/ReviewScreen'

const Stack = createStackNavigator();


const ReviewNavigator = () => {

    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Review"
            component={ReviewScreen}
            options={{
              // eslint-disable-next-line react/display-name
              headerRight: () => {
                return (
                  <Button
                    title="Settings"
                    onPress={() => navigation.navigate('settings')}
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)"
                  />
                )
              },
    
            }}
          />
          <Stack.Screen name="settings" component={SettingsScreen} />
        </Stack.Navigator >
      );

}

export default ReviewNavigator

