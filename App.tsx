import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from '@/navigation/screens/Home';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

export default App;
