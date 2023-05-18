import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from '@/navigation/screens/Feed';
import Edit from '@/navigation/screens/Edit';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
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
