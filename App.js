import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index Screen">
        <Stack.Screen
          name="Index Screen"
          component={IndexScreen}
          options={{ title: "Blogs" }}
        />
        <Stack.Screen
          name="Show Screen"
          component={ShowScreen}
          options={{ title: "Blog details" }}
        />
        <Stack.Screen
          name="Create Screen"
          component={CreateScreen}
          options={{ title: "Create Blog" }}
        />
        <Stack.Screen
          name="Edit Screen"
          component={EditScreen}
          options={{ title: "Edit Blog" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}