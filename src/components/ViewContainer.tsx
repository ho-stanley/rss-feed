import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {sharedStyles} from '@/styles';

type ViewContainerProps = {
  children: ReactNode;
};

function ViewContainer({children}: ViewContainerProps): JSX.Element {
  return <View style={sharedStyles.container}>{children}</View>;
}

export default ViewContainer;
