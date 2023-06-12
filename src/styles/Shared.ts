import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  // Used for root view in screens
  container: {
    flex: 1,
    padding: 16,
  },
  // Used to position item at the bottom of the screen, e.g. button
  bottom: {
    marginTop: 'auto',
  },
});
