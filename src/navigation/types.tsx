import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Feeds: undefined;
  EditFeed: {feedId: string};
  AddFeed: undefined;
};

export type FeedsProps = StackScreenProps<RootStackParamList, 'Feeds'>;

export type AddFeedProps = StackScreenProps<RootStackParamList, 'AddFeed'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
