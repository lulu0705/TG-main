import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import ContentMain from '../Screens/components/ContentMain';
import AlbumList from '../Screens/components/ContentMain';
import Home from '../Screens/pages/Home';

//Screen names
const Main = "Home";
const Album = "Details";
const settings = "settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Main}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === Main) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === Album) {
              iconName = focused ? 'list' : 'list-outline';
            } else if (rn === settings) {
              iconName = focused ? 'settings' : 'list-outline';
            } 

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70},
        }}>

        {/* Route */}
        <Tab.Screen name={Main} component={ContentMain} options={{headerShown: false}}/>
        <Tab.Screen name={Album} component={AlbumList} options={{headerShown: false}}/>
        <Tab.Screen name={settings} component={Home} options={{headerShown: false}}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;

