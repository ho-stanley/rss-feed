import 'react-native-gesture-handler';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {StackHeaderProps, createStackNavigator} from '@react-navigation/stack';
import Feed from '@/navigation/screens/Feed';
import Edit from '@/navigation/screens/Edit';
import {RootStackParamList} from '@/navigation/types';
import CustomNavigationBar from '@/navigation/CustomNavigationBar';

const RootStack = createStackNavigator<RootStackParamList>();
const AppHeader = (props: StackHeaderProps) => (
  <CustomNavigationBar {...props} />
);

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Feed"
          screenOptions={{header: AppHeader}}>
          <RootStack.Screen
            name="Feed"
            component={Feed}
            options={{
              title: 'Feed',
            }}
          />
          <RootStack.Screen
            name="Edit"
            component={Edit}
            options={{title: 'Edit'}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
