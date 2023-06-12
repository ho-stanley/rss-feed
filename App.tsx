import 'react-native-gesture-handler'; // Must be imported first!
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {StackHeaderProps, createStackNavigator} from '@react-navigation/stack';
import AddFeedScreen from '@/navigation/screens/AddFeed';
import FeedsScreen from '@/navigation/screens/Feeds';
import EditFeedScreen from '@/navigation/screens/EditFeed';
import {RootStackParamList} from '@/navigation/types';
import AppbarHeader from '@/navigation/AppbarHeader';
import ActionHeader from '@/navigation/ActionHeader';

const RootStack = createStackNavigator<RootStackParamList>();
const AppHeader = (props: StackHeaderProps) => <AppbarHeader {...props} />;
const ModalHeader = (props: StackHeaderProps) => <ActionHeader {...props} />;

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Feeds">
          <RootStack.Group screenOptions={{header: AppHeader}}>
            <RootStack.Screen
              name="Feeds"
              component={FeedsScreen}
              options={{title: 'Feeds'}}
            />
            <RootStack.Screen
              name="EditFeed"
              component={EditFeedScreen}
              options={{title: 'Edit feed'}}
            />
          </RootStack.Group>
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              header: ModalHeader,
            }}>
            <RootStack.Screen
              name="AddFeed"
              component={AddFeedScreen}
              options={{title: 'Add feed'}}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
