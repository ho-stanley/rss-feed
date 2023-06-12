import React from 'react';
import {IconButton, Tooltip} from 'react-native-paper';
import {View} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack';

/**
 * Header for screens requiring user actions, e.g. choice selection or input.
 */
function ActionHeader({navigation}: StackHeaderProps): JSX.Element {
  return (
    <View>
      <Tooltip title="Close">
        <IconButton
          icon="close"
          accessibilityLabel="Close"
          onPress={() => navigation.goBack()}
        />
      </Tooltip>
    </View>
  );
}

export default ActionHeader;
