import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '@/navigation/screens/Feed';
import Edit from '@/navigation/screens/Edit';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{title: 'Feed'}}
          />
          <Stack.Screen
            name="Edit"
            component={Edit}
            options={{title: 'Edit'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
