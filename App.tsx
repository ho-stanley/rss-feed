import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Home from '@/navigation/screens/Home';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
