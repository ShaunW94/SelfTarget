import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/home';
import TaskScreen from './src/task';
import PreferencesScreen from './src/preferences'; 



const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer> 
        <Stack.Navigator>   
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Task" component={TaskScreen} />
          <Stack.Screen name="Preferences" component={PreferencesScreen} />
        </Stack.Navigator>   
      </NavigationContainer> 
    );
};

export default App;