import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Feed: undefined;
  Edit: undefined;
};

export type FeedProps = StackScreenProps<RootStackParamList, 'Feed'>;
