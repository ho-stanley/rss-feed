import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native-paper';
import ViewContainer from '@/components/ViewContainer';
import {sharedStyles} from '@/styles';

function AddFeed(): JSX.Element {
  const [url, setUrl] = useState('');

  const handleSubmit = () => {
    console.log('Button clicked');
  };

  return (
    <ViewContainer>
      <Text variant="displaySmall">Add new feed</Text>
      <TextInput label="URL" value={url} onChangeText={text => setUrl(text)} />
      <Button
        style={sharedStyles.bottom}
        mode="contained"
        onPress={handleSubmit}>
        Add
      </Button>
    </ViewContainer>
  );
}

export default AddFeed;
