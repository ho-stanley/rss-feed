import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Text>Hello world!</Text>
      </NavigationContainer>{' '}
    </PaperProvider>
  );
}

export default App;
