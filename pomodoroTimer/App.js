import * as React from 'react';
import TaskListPage from "./pages/TaskListPage";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CadastroScreen from './pages/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TaskListPage}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

