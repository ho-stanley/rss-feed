import React from 'react';
import {Appbar, IconButton, Tooltip} from 'react-native-paper';
import {getHeaderTitle} from '@react-navigation/elements';
import {StackHeaderProps} from '@react-navigation/stack';

function AppbarHeader({navigation, route, options, back}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      <Tooltip title="Add feed">
        <IconButton
          icon="plus"
          accessibilityLabel="Add feed"
          onPress={() => navigation.navigate('AddFeed')}
        />
      </Tooltip>
    </Appbar.Header>
  );
}

export default AppbarHeader;
