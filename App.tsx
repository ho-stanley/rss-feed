import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Feed from '@/navigation/screens/Feed';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Feed />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
